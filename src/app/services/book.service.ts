import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { BookList } from '../models/book-list.model';
import { Book } from '../models/book.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(params?: any): Observable<BookList> {
    let options = {}
    if (params) {
      options = {
        params: new HttpParams()
          .set('page', params.page || 1)
          .set('pageSize', params.pageSize || 5)
          // .set('sort', params.sort || "")
          // .set('sortDirection', params.sortDirection || "")
          .set('filter', params.filter && JSON.stringify(params.filter) || "")
      }
    }
    return this.http.get<BookList>(`http://localhost:3000/api/books`, options).pipe(map((book) => {
      return book;
    }));
  }

  newBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`http://localhost:3000/api/books`, book);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`http://localhost:3000/api/books/${id}`).pipe(map((book) => {
      return book;
    }));
  }

  editBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`http://localhost:3000/api/books/${book._id}`, book);
  }

  getReviwev(book_id: number): Observable<Review[]> {
    return this.http.get<Review[]>(`http://localhost:3000/api/books/${book_id}/reviews`);
  }

  deleteReviwe(reviewID: number): Observable<Review> {
    return this.http.delete<Review>(`http://localhost:3000/api/reviews/${reviewID}`);
  }
}
