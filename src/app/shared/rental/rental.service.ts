import { Injectable } from '@angular/core';
import { Rental } from './rental.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  url = environment.url;

  rentals: Rental[] = [];

  constructor(private http: HttpClient) { }

  getRentals(id) {
    return this.http.get<any>(this.url + '/customerRentals/' + id);
  }

  getAllRentals() {
    return this.http.get<any>(this.url + '/getCustomerRentals');
  }

  getRentalsByStore(id) {
    return this.http.get<any>(this.url + '/getRentalsByStore/' + id);
  }

  getRentalCategory(id) {
    return this.http.get<any>(this.url + '/getCategory/' + id);
  }

  postPayment(payment) {
    return this.http.post<any>(this.url + '/postPayment', payment);
  }

  addCustomerRental(rental) {
    return this.http.post<any>(this.url + '/addCustomerRental', rental);
  }

  postCustomerRentals(rental) {
    return this.http.post<any>(this.url + '/postCustomerRental', rental);
  }
}
