import { Component } from '@angular/core';

import { Contact } from '../../models/contact.model';
import { ContactUsService } from 'src/book-tracker-app/services/contact-us.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent {
  contact: Contact = new Contact();
  contacts: Array<Contact> = new Array<Contact>();
  constructor(private contactUsService: ContactUsService, private router: Router) {
    this.contact = new Contact();
  }
  onSubmit() {
    this.contactUsService.addContact(this.contact).subscribe({
      next: (response) => {
        alert("Submitted");
        this.router.navigate(['home/contactUs']);
      },
      error: (response) => {
        alert(response);
      }
    });
  }
}