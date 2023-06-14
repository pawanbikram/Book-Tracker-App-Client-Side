import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../../models/book.model';
import { BooksService } from 'src/book-tracker-app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {
  books: Array<Book> = new Array<Book>();
  constructor(private router: Router, private booksService: BooksService) {
  }
  ngOnInit() {
    this.booksService.getAllBooks().subscribe({
      next: (response) => {
        this.books = response;
      },
      error: (response) => {
        alert(response);
      }
    });
  }
  redirectToAdd() {
    this.router.navigate(['home/books/addBook']);
  }
  redirectToEdit(id: number) {
    this.router.navigate(['home/books/editBook', id]);
  }
  deleteBook(id: number) {
    this.booksService.deleteBook(id).subscribe({
      next: (response) => {
        this.router.navigate(['home/books']);       
      },
      error: (response) => {
        alert(response);
      }
    });
  }
}