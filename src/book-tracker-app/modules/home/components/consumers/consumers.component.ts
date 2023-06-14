import { Component } from '@angular/core';
import { Consumer } from '../../models/consumer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})

export class ConsumersComponent {
  consumer: Consumer = new Consumer();
  consumers: Array<Consumer> = new Array<Consumer>();
  constructor(private router: Router) {
    this.consumers = [
      {
        sn: 1,
        name: "Ramesh Subedi",
        address: "Dhangadhi",
        mobile: "9811111111"
      },
      {
        sn: 2,
        name: "Ramesh Subedi2",
        address: "Dhangadhi2",
        mobile: "98111111112"
      },
    ];
  }
  redirectToAdd() {
    this.router.navigate(['home/consumers/addConsumer']);
  }
  redirectToEdit() {
    this.router.navigate(['home/consumers/editConsumer']);
  }
}