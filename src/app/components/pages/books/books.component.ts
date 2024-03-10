import { Component, OnInit, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  queryParams = {
    page: 1,
    pageSize: 6,
    filter: {
      author: '',
      title: '',
    }
  }
  bookService: BookService = inject(BookService);
  comunService: ComunicationService = inject(ComunicationService);

  books: Observable<Book[]> = this.bookService.getBooks().pipe(map((value) => value.results));

  setQuaryParams(): void {
    this.comunService.getRadio().subscribe((value) => {
      if (!value) return;
      if (value.radioValue == 'author') {
        this.queryParams.filter.author = value.searchText;
        this.queryParams.filter.title = '';
        this.onGetBooks();
      }
      else {
        this.queryParams.filter.title = value.searchText;
        this.queryParams.filter.author = '';
        this.onGetBooks();
      }
    });
  }

  onGetBooks(): void {
    this.books = this.bookService.getBooks(this.queryParams).pipe(map((value) => value.results));
  }

  onLoadMore(): void {
    this.queryParams.pageSize += 6;
    this.onGetBooks();
  }

  ngOnInit(): void {
    this.setQuaryParams();
  }
}
