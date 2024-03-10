import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { Review } from 'src/app/models/review.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  bookService: BookService = inject(BookService);

  book: Book = new Book();
  reviews: Review[] = [];

  onGetDelete(): void {
    console.log('obrisalo se');
    this.onGetBook();
  }

  onGetBook(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap((paramID) => {
        const id = Number(paramID.get('id'))
        return this.bookService.getBook(id);
      }),
      switchMap((paramBook) => {
        this.book = paramBook;
        return this.bookService.getReviwev(paramBook._id);
      }))
      .subscribe((value) => {
        this.reviews = value;
        console.log(this.reviews);
      });
  }

  ngOnInit(): void {
    this.onGetBook();
  }
}
