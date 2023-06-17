import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../../../models/book.model';
import { BooksService } from 'src/book-tracker-app/services/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})

export class EditBookComponent {
  book: Book;
  constructor(private router: Router, private activedRoute: ActivatedRoute, private booksService: BooksService) {
    this.book = new Book();
  }
  ngOnInit() {
    this.activedRoute.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.booksService.getBook(id).subscribe({
            next: (response) => {
              this.book = response;
            },
            error: (response) => {
              alert(response);
            }
          });
        }
      },
      error: (params) => {
        alert(params);
      }
    });
  }
  onSubmit() {
    this.booksService.updateBook(this.book.id, this.book).subscribe({
      next: (response) => {
        this.router.navigate(['home/books']);
      },
      error: (error) => {
        console.error('Error editing books:', error);
      }
    });
  }
  redirectToBooks() {
    this.router.navigate(['home/books']);
  }
}