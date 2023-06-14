import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../modules/home/models/book.model';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  baseApiUrl: string = 'https://localhost:7268';

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Array<Book>> {
    return this.http.get<Array<Book>>(this.baseApiUrl + '/api/Book');
  }

  addBook(addBookRequest: Book): Observable<Book> {
    return this.http.post<Book>(this.baseApiUrl + '/api/Book', addBookRequest);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(this.baseApiUrl + '/api/Book/' + id);
  }

  updateBook(id: number, updateBookRequest: Book): Observable<Book> {
    return this.http.put<Book>(this.baseApiUrl + '/api/Book/' + id, updateBookRequest);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(this.baseApiUrl + '/api/Book/' + id);
  }
}