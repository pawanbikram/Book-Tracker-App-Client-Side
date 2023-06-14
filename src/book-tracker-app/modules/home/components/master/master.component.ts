import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SideMenu } from '../../models/side-menu.model';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})

export class MasterComponent {
  title = "Book Tracker App";
  sideMenu = SideMenu;
  constructor(private router: Router) {

  }
  homeIcon() {
    this.router.navigate(['home']);
  }

  logout() {
    this.router.navigate(['login']);
  }
}