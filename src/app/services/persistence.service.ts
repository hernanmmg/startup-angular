import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Photo, PhotosSync, PhotoSync } from '../components/photos/interfaces/photo';
import { LocalStorageService } from 'ngx-localstorage';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
  selected!: Photo;
  photos$: BehaviorSubject<PhotosSync>;

  getPhotos(): Observable<PhotosSync> {
    return this.photos$.asObservable();
  }

  setPhotos() {
    const photoStorage: PhotosSync = this._localstorage.get('photoStorage')
    this.photos$.next(photoStorage);
  }

  constructor(private _localstorage: LocalStorageService) {
    this.photos$ = new BehaviorSubject<PhotosSync>(this._localstorage.get('photoStorage'));
  }

  photoSelected(newPhoto: Photo) {
    // let message = '';
    const isDuplicate = this.selected && this.selected.id === newPhoto.id;
    if (!isDuplicate) {
      this.selected = newPhoto;
      // message = 'the last saved photo has been changed';
    }
    this._localstorage.set<Photo>('photoStorage', this.selected!);
  }

  chargeSelected() {
    const selected = this._localstorage.get<Photo>('photoStorage')!;
    this.selected = selected;
    return this.selected;
  }
}
