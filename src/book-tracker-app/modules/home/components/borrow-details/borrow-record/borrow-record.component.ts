import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Book } from '../../../models/book.model';
import { BooksService } from 'src/book-tracker-app/services/books.service';
import { Consumer } from '../../../models/consumer.model';
import { ConsumersService } from 'src/book-tracker-app/services/consumers.service';
import { BookBorrowRecordService } from 'src/book-tracker-app/services/book-borrow-record.service';

@Component({
  selector: 'app-borrow-record',
  templateUrl: './borrow-record.component.html',
  styleUrls: ['./borrow-record.component.css']
})

export class BorrowRecordComponent {
  books: Array<Book> = new Array<Book>();
  borrowers: Array<Consumer> = new Array<Consumer>();
  borrowRecordForm!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private booksService: BooksService, private consumersService: ConsumersService, private bookBorrowRecord: BookBorrowRecordService) {

  }
  ngOnInit() {
    this.buildForm();
    this.fetchBorrowers();
    this.fetchBooks();
  }

  fetchBooks() {
    this.booksService.getAllBooks().subscribe({
      next: (response) => {
        this.books = response;
      },
      error: (error) => {
        console.error('Error fetching books:', error);
      }
    });
  }

  fetchBorrowers() {
    this.consumersService.getAllConsumers().subscribe({
      next: (response) => {
        this.borrowers = response;
      },
      error: (response) => {
        alert(response);
      }
    });
  }

  buildForm() {
    this.borrowRecordForm = this.formBuilder.group({
      borrower: ['', Validators.required],
      book: ['', Validators.required],
      sn: ['', Validators.required],
      bDate: ['', Validators.required],
      rDate: ['', Validators.required],
      quantity: ['', Validators.required],
      borrowCharge: ['', Validators.required]
    });
    this.borrowRecordForm.get('quantity')?.valueChanges.subscribe(() => {
      this.calculateBorrowCharge();
    });
  }

  calculateBorrowCharge() {
    const quantity = this.borrowRecordForm.get('quantity')?.value;
    const bookControl = this.borrowRecordForm.get('book');
    const bookName = String(bookControl?.value);
    const book = this.books.find(book => book.name === bookName);

    if (quantity && book) {
      const borrowCharge = (quantity * book.price) * 0.05;
      this.borrowRecordForm.get('borrowCharge')?.setValue(borrowCharge.toFixed(2));
    } else {
      this.borrowRecordForm.get('borrowCharge')?.setValue('');
    }
  }

  onSubmit() {
    const formData = this.borrowRecordForm.value;

    const bookName = formData.book;
    const borrowedQuantity = formData.quantity;
    const book = this.books.find(book => book.name === bookName);
  
    if (book && book.quantity >= borrowedQuantity) {
      book.quantity -= borrowedQuantity;

      this.booksService.updateBook(book.id, book).subscribe({
        next: () => {
          this.bookBorrowRecord.addBookBorrowRecord(this.borrowRecordForm.value).subscribe({
            next: (response) => {
              this.router.navigate(['home/borrowDetails']);
            },
            error: (error) => {
              console.error('Error adding book borrow record', error);
            }
          });
        },
        error: (error) => {
          console.error('Error updating book quantity', error);
        }
      });
    } else {
      console.error('Invalid quantity or book not found');
    }
  }
  
  redirectToBorrowDetails() {
    this.router.navigate(['home/borrowDetails']);
  }

  get borrowerControl() {
    return this.borrowRecordForm.get('borrower');
  }

  get bookControl() {
    return this.borrowRecordForm.get('book');
  }

  getAvailableBooks(): Array<Book> {
    return this.books.filter(book => book.status === true);
  }

  getAvailableQuantity(): number {
    const bookName = this.borrowRecordForm.get('book')?.value;
    const book = this.books.find(book => book.name === bookName);
    return book ? book.quantity : 0;
  }  

  get snControl() {
    return this.borrowRecordForm.get('sn');
  }

  get borrowDateControl() {
    return this.borrowRecordForm.get('borrowDate');
  }

  get returnDateControl() {
    return this.borrowRecordForm.get('returnDate');
  }

  get quantityControl() {
    return this.borrowRecordForm.get('quantity');
  }

  get borrowChargeControl() {
    return this.borrowRecordForm.get('borrowCharge');
  }
}