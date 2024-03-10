import { Component, inject } from '@angular/core';
import { ComunicationService } from 'src/app/services/comunication.service';

export type TextRadio = {
  searchText: string;
  radioValue: string;
}

@Component({
  selector: 'app-book-filtering',
  templateUrl: './book-filtering.component.html',
  styleUrls: ['./book-filtering.component.css']
})
export class BookFilteringComponent {
  radio: string = 'title';
  comunService: ComunicationService = inject(ComunicationService);

  getRadioValue(text: string): void {
    this.radio = text;
  }

  onGetSearchTekst(search: string): void {
    const param: TextRadio = {
      searchText: search,
      radioValue: this.radio
    }
    this.comunService.updateRadio(param);
  }
}
