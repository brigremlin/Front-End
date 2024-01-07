import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer/customer.service';
import { Customer } from '../shared/customer/customer.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customers: Observable<Customer[]>;
  p = 1;
  searchText = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.customers = this.customerService.getCustomers();
  }



}
