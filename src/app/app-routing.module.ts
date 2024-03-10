import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { BooksComponent } from './components/pages/books/books.component';
import { AddBookComponent } from './components/pages/add-book/add-book.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BookDetailComponent } from './components/pages/books/book-detail/book-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: "about", component: AboutComponent },
  { path: "books/:id", component: BookDetailComponent },
  { path: "edit-book/:id", component: AddBookComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
