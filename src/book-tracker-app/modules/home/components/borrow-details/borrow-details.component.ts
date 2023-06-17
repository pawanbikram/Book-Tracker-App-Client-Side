import { Component } from '@angular/core';

import { BookBorrowRecord } from '../../models/book-borrow-record.model';
import { Router } from '@angular/router';
import { BookBorrowRecordService } from 'src/book-tracker-app/services/book-borrow-record.service';

@Component({
  selector: 'app-borrow-details',
  templateUrl: './borrow-details.component.html',
  styleUrls: ['./borrow-details.component.css']
})

export class BorrowDetailsComponent {
  bookBorrowRecords: Array<BookBorrowRecord> = new Array<BookBorrowRecord>();
  constructor(private router: Router, private bookBorrowRecord: BookBorrowRecordService) { }
  ngOnInit() {
    this.fetchBookBorrrowRecords();
  }
  fetchBookBorrrowRecords() {
    this.bookBorrowRecord.getAllBookBorrowRecords().subscribe({
      next: (response) => {
        this.bookBorrowRecords = response;
      },
      error: (error) => {
        console.error('Error fetching book borrow records', error);
      }
    })
  }
  redirectToAdd() {
    this.router.navigate(['home/borrowDetails/borrowRecord']);
  }
}