import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get<any>('http://localhost:8080/getAllFilms');
  }

  getInventory() {
    return this.http.get<any>('http://localhost:8080/getInventory');
  }

  getInventoryId(id) {
    return this.http.get<any>('http://localhost:8080/getInventoryId/' + id);
  }
}
