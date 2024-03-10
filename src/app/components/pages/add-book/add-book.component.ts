import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  id: string | null = null;

  bookForm: FormGroup;
  editingMode: boolean = false;
  bookService: BookService = inject(BookService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  constructor(private formBuilder: FormBuilder) {
    this.bookForm = this.formBuilder.group({
      ISBN: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      yearOfPublication: [0, Validators.required],
      publisher: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (!this.bookForm.valid) return;
    if (!this.editingMode) {
      const newBook = new Book(this.bookForm.value);
      this.bookService.newBook(newBook).subscribe((value) => {
        this.router.navigate([`/books/${value._id}`]);
        this.bookForm.reset();
      });
    }
    else {
      console.log(' u edit modu sam');
      const editBook = new Book(this.bookForm.value);
      this.bookService.editBook(editBook).subscribe((value) => {
        this.router.navigate([`/books/${value._id}`]);
        this.bookForm.reset();
      });
    }

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      if (this.id !== null) {
        this.bookService.getBook(Number(this.id)).subscribe((value) => {
          this.bookForm.patchValue(value);
          this.editingMode = true;
        });
      }
    });
  }
}
