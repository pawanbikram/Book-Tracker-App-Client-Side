import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { BooksComponent } from './components/books/books.component';
import { ConsumersComponent } from './components/consumers/consumers.component';
import { BorrowDetailsComponent } from './components/borrow-details/borrow-details.component';
import { AboutUsComponent } from './components/borrow-details/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '', component: MasterComponent, children: [
      { path: 'books', component: BooksComponent },
      { path: 'consumers', component: ConsumersComponent },
      { path: 'borrowDetails', component: BorrowDetailsComponent },
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'contactUs', component: ContactUsComponent },
      { path: '', redirectTo: '/home/books', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }