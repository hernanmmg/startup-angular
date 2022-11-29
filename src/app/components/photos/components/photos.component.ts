import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { Photo } from '../interfaces/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];
  initParams = {q: '', cat: ''};

  constructor(
    @Inject(DOCUMENT) private document: Document,
    protected _photosService: PhotosService,
  ) {}

  ngOnInit(): void {
    this.nextPhotos(this.initParams);
  }

  nextPhotos(params: {[key: string]: string}): void {
    const { q, cat } = params;
    this._photosService.getPhotos(q, cat)
      .subscribe({
        next: ({ hits }) => this.photos.push(...hits),
        error: () => this.photos = []
      });
  }
}
