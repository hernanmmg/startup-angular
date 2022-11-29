import { Component, OnInit } from '@angular/core';
import { PersistenceService } from 'src/app/services/persistence.service';
import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  photo!: Photo;
  constructor(private _persistence: PersistenceService){ }

  ngOnInit(): void {
    this.photo = this._persistence.chargeSelected();
  }
}
