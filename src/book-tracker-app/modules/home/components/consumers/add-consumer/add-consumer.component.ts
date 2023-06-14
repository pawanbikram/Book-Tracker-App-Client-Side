import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Consumer } from '../../../models/consumer.model';

@Component({
  selector: 'app-add-consumer',
  templateUrl: './add-consumer.component.html',
  styleUrls: ['./add-consumer.component.css']
})

export class AddConsumerComponent {
  consumer: Consumer;
  constructor(private router: Router) {
    this.consumer = new Consumer();
  }
  onSubmit() {
    this.router.navigate(['home/consumers']);
  }
  redirectToConsumers() {
    this.router.navigate(['home/consumers']);
  }
}