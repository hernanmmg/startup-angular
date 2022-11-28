import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class BolsiyoService {
  private url = environment['services'].pixabay.get.url;
  private key = environment['services'].pixabay.get.key;

  constructor(protected http: HttpClient) {}

  fetchPhotos(query: string, category: string): Observable<any> {
    const baseURL = `${this.url}?key=${this.key}`;
    const params = (query && query.length <= 100) ? `&lang=es&q=${query}` : '';
    const categories = category ? `&category=${category}` : '';
    const endpoint = baseURL + params + categories;

    return this.http.get(endpoint);
  }
}
