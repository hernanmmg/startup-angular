import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() nextPhotos: EventEmitter<any> = new EventEmitter();

  q: string = '';
  catSelected: string = '';
  categories: string[] = ['science', 'education', 'people', 'feelings', 'computer', 'buildings'];

  onSubmit(): void {
    this.nextPhotos.emit({ q: this.q, cat: this.catSelected });
  }
}
