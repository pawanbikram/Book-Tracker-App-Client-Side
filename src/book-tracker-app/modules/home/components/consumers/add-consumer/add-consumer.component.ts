import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Consumer } from '../../../models/consumer.model';
import { ConsumersService } from 'src/book-tracker-app/services/consumers.service';

@Component({
  selector: 'app-add-consumer',
  templateUrl: './add-consumer.component.html',
  styleUrls: ['./add-consumer.component.css']
})

export class AddConsumerComponent {
  consumer: Consumer;
  constructor(private router: Router, private consumersService: ConsumersService) {
    this.consumer = new Consumer();
  }
  onSubmit() {
    this.consumersService.addConsumer(this.consumer).subscribe({
      next: (response) => {
        this.router.navigate(['home/consumers']);
      },
      error: (response) => {
        alert(response);
      }
    });
  }
  redirectToConsumers() {
    this.router.navigate(['home/consumers']);
  }
}