import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../modules/home/models/contact.model';

@Injectable({
  providedIn: 'root'
})

export class ContactUsService {
  baseApiUrl: string = 'https://localhost:7268';

  constructor(private http: HttpClient) { }

  addContact(addContactRequest: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.baseApiUrl + '/api/Contact', addContactRequest);
  }
}