import { Injectable } from '@angular/core';
import { Rental } from './rental.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  rentals: Rental[] = [];

  constructor(private http: HttpClient) { }

  getRentals(id) {
    return this.http.get<any>('http://localhost:8080/customerRentals/' + id);
  }

  getAllRentals() {
    return this.http.get<any>('http://localhost:8080/getCustomerRentals');
  }

  getRentalsByStore(id) {
    return this.http.get<any>('http://localhost:8080/getRentalsByStore/' + id);
  }

  getRentalCategory(id) {
    return this.http.get<any>('http://localhost:8080/getCategory/' + id);
  }

  postPayment(payment) {
    return this.http.post<any>('http://localhost:8080/postPayment', payment);
  }

  addCustomerRental(rental) {
    return this.http.post<any>('http://localhost:8080/addCustomerRental', rental);
  }

  postCustomerRentals(rental) {
    return this.http.post<any>('http://localhost:8080/postCustomerRental', rental);
  }
}
