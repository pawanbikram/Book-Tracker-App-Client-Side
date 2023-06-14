import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MasterComponent } from './components/master/master.component';
import { BooksComponent } from './components/books/books.component';
import { ConsumersComponent } from './components/consumers/consumers.component';
import { BorrowDetailsComponent } from './components/borrow-details/borrow-details.component';
import { AboutUsComponent } from './components/borrow-details/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    MasterComponent,
    BooksComponent,
    ConsumersComponent,
    BorrowDetailsComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})

export class HomeModule { }