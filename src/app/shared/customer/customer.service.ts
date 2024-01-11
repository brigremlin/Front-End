import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = "http://54.91.60.242:8080";

  customers: Customer[] = [];

  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get<any>('/api/getCustomers');
  }

  findCustomer(customer_id) {
    return this.http.get<any>('/api/findCustomer/' + customer_id);
  }

  updateCustomer(customer) {
    return this.http.post<any>('/api/updateCustomer', customer);
  }

  getCustomerRentals(id) {
    return this.http.get<any>('/api/getRentalsByCustomer/' + id);
  }

  deleteRental(id) {
    return this.http.delete<any>('/api/deleteRental/' + id);
  }

  addCustomer(customer) {
    return this.http.post<any>('/api/addCustomer', customer);
  }


}
