import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BooksComponent } from './components/pages/books/books.component';
import { BookItemComponent } from './components/pages/books/book-item/book-item.component';
import { BookFilteringComponent } from './components/pages/books/book-filtering/book-filtering.component';
import { AddBookComponent } from './components/pages/add-book/add-book.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HeaderComponent } from './components/core/header/header.component';
import { SidebarComponent } from './components/core/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './components/pages/books/book-detail/book-detail.component';
import { BookReviewComponent } from './components/pages/books/book-detail/book-review/book-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookItemComponent,
    BookFilteringComponent,
    AddBookComponent,
    AboutComponent,
    HeaderComponent,
    SidebarComponent,
    BookDetailComponent,
    BookReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
