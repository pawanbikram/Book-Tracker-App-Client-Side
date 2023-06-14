import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Consumer } from '../../../models/consumer.model';

@Component({
  selector: 'app-edit-consumer',
  templateUrl: './edit-consumer.component.html',
  styleUrls: ['./edit-consumer.component.css']
})

export class EditConsumerComponent {
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