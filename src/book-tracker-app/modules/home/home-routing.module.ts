import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { BooksComponent } from './components/books/books.component';
import { ConsumersComponent } from './components/consumers/consumers.component';
import { BorrowDetailsComponent } from './components/borrow-details/borrow-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';
import { AddConsumerComponent } from './components/consumers/add-consumer/add-consumer.component';
import { EditConsumerComponent } from './components/consumers/edit-consumer/edit-consumer.component';
import { BorrowRecordComponent } from './components/borrow-details/borrow-record/borrow-record.component';

const routes: Routes = [
  {
    path: '', component: MasterComponent, children: [
      { path: '', redirectTo: '/home/books', pathMatch: 'full' },
      { path: 'books', component: BooksComponent },
      { path: 'consumers', component: ConsumersComponent },
      { path: 'borrowDetails', component: BorrowDetailsComponent },
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'contactUs', component: ContactUsComponent },
      { path: 'books/addBook', component: AddBookComponent },
      { path: 'books/editBook/:id', component: EditBookComponent },
      { path: 'consumers/addConsumer', component: AddConsumerComponent },
      { path: 'consumers/editConsumer/:id', component: EditConsumerComponent },
      { path: 'borrowDetails/borrowRecord', component: BorrowRecordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }