import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MasterComponent } from './components/master/master.component';
import { BooksComponent } from './components/books/books.component';
import { ConsumersComponent } from './components/consumers/consumers.component';
import { BorrowDetailsComponent } from './components/borrow-details/borrow-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';
import { FormsModule } from '@angular/forms';
import { AddConsumerComponent } from './components/consumers/add-consumer/add-consumer.component';
import { EditConsumerComponent } from './components/consumers/edit-consumer/edit-consumer.component';
import { BorrowRecordComponent } from './components/borrow-details/borrow-record/borrow-record.component';

@NgModule({
  declarations: [
    MasterComponent,
    BooksComponent,
    ConsumersComponent,
    BorrowDetailsComponent,
    AboutUsComponent,
    ContactUsComponent,
    AddBookComponent,
    EditBookComponent,
    AddConsumerComponent,
    EditConsumerComponent,
    BorrowRecordComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})

export class HomeModule { }