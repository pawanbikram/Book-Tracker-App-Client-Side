import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/book-tracker-app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  }

  onSubmit() {
    this.authenticationService.login(this.loginForm.value).subscribe(
      (result) => {
        this.authenticationService.setToken(result);
        alert('Login successful');
        this.router.navigate(['home']);
      },
      (err) => {
        alert('Login failed');
      }
    );
  }
}