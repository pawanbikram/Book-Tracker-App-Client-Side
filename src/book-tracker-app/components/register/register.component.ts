import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { RegistrationService } from 'src/book-tracker-app/services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router, private registrationService: RegistrationService) { }
  onSubmit() {
    this.registrationService.register(this.registerForm.value).subscribe(
      (result) => {
        this.router.navigate(['home']);
      },
      (error) => {
        console.error('Error registering user', error);
      }
    );
  }
}