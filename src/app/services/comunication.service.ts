import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TextRadio } from '../components/pages/books/book-filtering/book-filtering.component';


@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  private radioSubject: BehaviorSubject<TextRadio> = new BehaviorSubject<TextRadio>({ searchText: '', radioValue: 'title' });
  getRadio() {
    return this.radioSubject.asObservable();
  }

  updateRadio(filtering: TextRadio): void {
    this.radioSubject.next(filtering);
  }

  private dataSubject: BehaviorSubject<{ spec: string, name: string, lastName: string }> = new BehaviorSubject<{ spec: string, name: string, lastName: string }>({ spec: '', name: '', lastName: '' });

  // getData() {
  //   return this.dataSubject.asObservable();
  // }

  // updateSpec(spec: string) {
  //   const currentState = this.dataSubject.getValue();
  //   const newState = { ...currentState, spec: spec };
  //   this.dataSubject.next(newState);
  // }

  // updateName(name: string) {
  //   const currentState = this.dataSubject.getValue();
  //   const newState = { ...currentState, name: name };
  //   this.dataSubject.next(newState);
  // }

  // updateLastName(lastName: string) {
  //   const currentState = this.dataSubject.getValue();
  //   const newState = { ...currentState, lastName: lastName };
  //   this.dataSubject.next(newState);
  // }



}
