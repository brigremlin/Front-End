import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  url = "http://54.91.60.242:8080";

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get<any>('/api/getAllFilms');
  }

  getInventory() {
    return this.http.get<any>('/api/getInventory');
  }

  getInventoryId(id) {
    return this.http.get<any>('/api/getInventoryId/' + id);
  }
}
