import { Component, Input, Output, inject, EventEmitter } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent {
  bookService: BookService = inject(BookService);
  @Input() review: Review = new Review();

  @Output() deleteChange: EventEmitter<boolean> = new EventEmitter();

  onDeleteReview(review_id: number): void {
    this.bookService.deleteReviwe(review_id).subscribe((value) => {
      console.log(value);
      this.review._id = review_id;
      this.deleteChange.emit();
    });
  }
}
