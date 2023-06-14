import { Component } from '@angular/core';
import { BorrowDetail } from '../../models/borrow-detail.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrow-details',
  templateUrl: './borrow-details.component.html',
  styleUrls: ['./borrow-details.component.css']
})

export class BorrowDetailsComponent {
  borrowDetail: BorrowDetail = new BorrowDetail();
  borrowDetails: Array<BorrowDetail> = new Array<BorrowDetail>();
  constructor(private router: Router) { 
    this.borrowDetails = [
      {
        sn: 1,
        name: "Ramesh Subedi",
        book: "DSA",
        quantity: 2,
        bdate: Date(),
        rdate: Date()
      },
      {
        sn: 2,
        name: "Ramesh Subedi2",
        book: "DSA2",
        quantity: 4,
        bdate: Date(),
        rdate: Date()
      },
    ];
  }
  redirectToAdd() {
    this.router.navigate(['home/borrowDetails/borrowRecord']);
  }
}