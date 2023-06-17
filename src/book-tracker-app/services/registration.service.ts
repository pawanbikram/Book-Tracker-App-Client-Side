import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
  baseApiUrl: string = 'https://localhost:7268';

  constructor(private http: HttpClient) { }

  register(registerRequest: any): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/Authentication/Register', registerRequest);
  }
}