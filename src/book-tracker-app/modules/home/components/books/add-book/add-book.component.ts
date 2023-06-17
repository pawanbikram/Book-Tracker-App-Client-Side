import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../../../models/book.model';
import { BooksService } from 'src/book-tracker-app/services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent {
  book: Book;
  constructor(private router: Router, private booksService: BooksService) {
    this.book = new Book();
  }
  onSubmit() {
    this.booksService.addBook(this.book).subscribe({
      next: (response) => {
        this.router.navigate(['home/books']);
      },
      error: (error) => {
        console.error('Error adding book:', error);
      }
    });
  }
  redirectToBooks() {
    this.router.navigate(['home/books']);
  }
}