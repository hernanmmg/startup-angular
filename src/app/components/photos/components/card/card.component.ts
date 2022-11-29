import { Component, Input } from '@angular/core';
import { PersistenceService } from 'src/app/services/persistence.service';
import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() photo!: Photo;

  constructor(private _persistence: PersistenceService){ }

  savedFavorite(): void {
    this._persistence.photoSelected(this.photo);
  }
}
