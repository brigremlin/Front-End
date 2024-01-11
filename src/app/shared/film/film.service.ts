import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  url = "http://54.91.60.242:8080";

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get<any>(this.url + '/getAllFilms');
  }

  getInventory() {
    return this.http.get<any>(this.url + '/getInventory');
  }

  getInventoryId(id) {
    return this.http.get<any>(this.url + '/getInventoryId/' + id);
  }
}
