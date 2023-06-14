import { Component } from '@angular/core';

import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent {
  contact: Contact = new Contact();
  contacts: Array<Contact> = new Array<Contact>();
  onSubmit() {
    console.log(this.contact);
    this.contact = new Contact();
  }
}