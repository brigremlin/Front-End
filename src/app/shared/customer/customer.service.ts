import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[] = [];

  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get<any>('http://localhost:8080/getCustomers');
  }

  findCustomer(customer_id) {
    return this.http.get<any>('http://localhost:8080/findCustomer/' + customer_id);
  }

  updateCustomer(customer) {
    return this.http.post<any>('http://localhost:8080/updateCustomer', customer);
  }

  getCustomerRentals(id) {
    return this.http.get<any>('http://localhost:8080/getRentalsByCustomer/' + id);
  }

  deleteRental(id) {
    return this.http.delete<any>('http://localhost:8080/deleteRental/' + id);
  }

  addCustomer(customer) {
    return this.http.post<any>('http://localhost:8080/addCustomer', customer);
  }


}
