import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookBorrowRecord } from '../modules/home/models/book-borrow-record.model';

@Injectable({
  providedIn: 'root'
})

export class BookBorrowRecordService {
  baseApiUrl: string = 'https://localhost:7268';

  constructor(private http: HttpClient) { }

  getAllBookBorrowRecords(): Observable<Array<BookBorrowRecord>> {
    return this.http.get<Array<BookBorrowRecord>>(this.baseApiUrl + '/api/BookBorrowRecord');
  }

  addBookBorrowRecord(addBookBorrowRecordRequest: BookBorrowRecord): Observable<BookBorrowRecord> {
    return this.http.post<BookBorrowRecord>(this.baseApiUrl + '/api/BookBorrowRecord', addBookBorrowRecordRequest);
  }
}