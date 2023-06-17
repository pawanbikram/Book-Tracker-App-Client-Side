import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class AuthInverseGuard {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate(): boolean {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}