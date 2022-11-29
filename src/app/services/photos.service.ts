import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  MAX_CHARACTERS = 100;
  private baseApiUrl: string = environment['services'].pixabay.get.url;
  private key = environment['services'].pixabay.get.key;

  constructor(protected _http: HttpClient) {}

  getPhotos(query: string, category: string): Observable<any> {
    const baseURL = `${this.baseApiUrl}?key=${this.key}`;
    const params = (query && query.length <= this.MAX_CHARACTERS) ? `&lang=es&q=${query}` : '';
    const categories = category ? `&category=${category}` : '';
    const endpoint = baseURL + params + categories;

    return this._http.get(endpoint);
  }
}
