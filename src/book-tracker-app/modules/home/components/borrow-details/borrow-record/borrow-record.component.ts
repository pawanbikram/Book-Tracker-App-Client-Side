import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrow-record',
  templateUrl: './borrow-record.component.html',
  styleUrls: ['./borrow-record.component.css']
})

export class BorrowRecordComponent {
  constructor(private router: Router) {
    
  }
  onSubmit()  {
   this.router.navigate(['home/borrowDetails']);
  }
  redirectToBorrowDetails() {
    this.router.navigate(['home/borrowDetails']);
  }
}