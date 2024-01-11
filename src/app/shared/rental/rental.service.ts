import { Injectable } from '@angular/core';
import { Rental } from './rental.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  url = "http://54.91.60.242:8080";

  rentals: Rental[] = [];

  constructor(private http: HttpClient) { }

  getRentals(id) {
    return this.http.get<any>('/api/customerRentals/' + id);
  }

  getAllRentals() {
    return this.http.get<any>('/api/getCustomerRentals');
  }

  getRentalsByStore(id) {
    return this.http.get<any>('/api/getRentalsByStore/' + id);
  }

  getRentalCategory(id) {
    return this.http.get<any>('/api/getCategory/' + id);
  }

  postPayment(payment) {
    return this.http.post<any>('/api/postPayment', payment);
  }

  addCustomerRental(rental) {
    return this.http.post<any>('/api/addCustomerRental', rental);
  }

  postCustomerRentals(rental) {
    return this.http.post<any>('/api/postCustomerRental', rental);
  }
}
