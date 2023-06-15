import { Component } from '@angular/core';
import { Consumer } from '../../models/consumer.model';
import { Router } from '@angular/router';
import { ConsumersService } from 'src/book-tracker-app/services/consumers.service';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})

export class ConsumersComponent {
  consumers: Array<Consumer> = new Array<Consumer>();
  constructor(private router: Router, private consumersService: ConsumersService) {
  }
  ngOnInit() {
    this.consumersService.getAllConsumers().subscribe({
      next: (response) => {
        this.consumers = response;
      },
      error: (response) => {
        alert(response);
      }
    });
  }
  redirectToAdd() {
    this.router.navigate(['home/consumers/addConsumer']);
  }
  redirectToEdit(id: number) {
    this.router.navigate(['home/consumers/editConsumer', id]);
  }
  deleteConsumer(id: number) {
    this.consumersService.deleteConsumer(id).subscribe({
      next: (response) => {
        this.router.navigate(['home/consumers']);
      },
      error: (response) => {
        alert(response);
      }
    });   
  }
}