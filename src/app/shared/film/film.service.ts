import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  url = environment.url;

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
