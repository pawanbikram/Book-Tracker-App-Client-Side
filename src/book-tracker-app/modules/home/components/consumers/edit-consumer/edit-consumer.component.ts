import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Consumer } from '../../../models/consumer.model';
import { ConsumersService } from 'src/book-tracker-app/services/consumers.service';

@Component({
  selector: 'app-edit-consumer',
  templateUrl: './edit-consumer.component.html',
  styleUrls: ['./edit-consumer.component.css']
})

export class EditConsumerComponent {
  consumer: Consumer;
  constructor(private router: Router, private consumersService: ConsumersService, private activatedRoute: ActivatedRoute) {
    this.consumer = new Consumer();
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.consumersService.getConsumer(id).subscribe({
            next: (response) => {
              this.consumer = response;
            },
            error: (response) => {
              alert(response);
            }
          });
        }
      },
      error: (params) => {
        alert(params);
      }
    });
  }
  onSubmit() {
    this.consumersService.updateConsumer(this.consumer.id, this.consumer).subscribe({
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