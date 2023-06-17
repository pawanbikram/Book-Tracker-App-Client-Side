import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  baseApiUrl: string = 'https://localhost:7268';
  helper = new JwtHelperService();
  token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {
    this.token = this.getToken();
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  isLoggedIn() {
    const token = this.getToken();
    return !!token && !this.helper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
    this.token = null;
    this.router.navigate(['login']);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/Authentication/Login', loginRequest, { responseType: 'text' });
  }
}