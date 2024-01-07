import { HttpClient } from '@angular/common/http';
import {
  Component,
  Inject,
  LOCALE_ID,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../shared/customer/customer.service';
import { RentalService } from '../shared/rental/rental.service';
import { Rental } from '../shared/rental/rental.model';
import { CustomerRentals } from '../shared/customer-rentals/customer-rentals.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent {
  customer_id;
  customer;
  first_name;
  last_name;
  email;
  active;
  activebool;
  rentals: Rental[] = [];
  todaysDate: Date;
  rentalWeeks: number;
  rentalAverage = 0;
  dataSource;
  customer_rentals = [];
  rentalSum = 0;
  displayedColumns: string[] = [
    'rental_id',
    'rental_date',
    'return_date',
    'amount',
    'delete'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  blur = true;
  rentalFilms = new Map();
  topRented = [];
  rentalSubscription: Subscription;
  category;
  categories = new Map<string, number>();
  topRentedCat;

  constructor(
    private activatedRouter: ActivatedRoute,
    @Inject(LOCALE_ID) public locale: string,
    private customerService: CustomerService,
    private rentalService: RentalService
  ) {
    this.customer_id = this.activatedRouter.snapshot.paramMap.get('id');
    this.getCustomerById(this.customer_id).subscribe((res) => {
      this.first_name = res.first_name;
      this.last_name = res.last_name;
      this.email = res.email;
      this.activebool = res.activebool;
      this.customer = res;
    });

    this.rentalSubscription = this.getAllCustomerRentals(this.customer_id).subscribe((res) => {
      this.customer_rentals = res;
      this.calculateTopRentals();
      this.dataSource = new MatTableDataSource<CustomerRentals>(
        this.customer_rentals.sort((a,b) => new Date(b.rental_date).getTime() - new Date(a.rental_date).getTime())
      );
      this.dataSource.paginator = this.paginator;
      this.todaysDate = new Date();
      this.getRentalAverage();
      this.customer_rentals.forEach((element) => {
        this.rentalSum += element.amount;
      });
    });
  }


  getCustomerById(id) {
    return this.customerService.findCustomer(id);
  }

  getAllCustomerRentals(id) {
    return this.customerService.getCustomerRentals(id);
  }

  getRentalAverage() {
    let startDate = new Date(this.todaysDate.getFullYear(), 0, 1);
    this.rentalWeeks =
      Math.floor(
        Date.UTC(
          this.todaysDate.getFullYear(),
          this.todaysDate.getMonth() + 1
        ) - Date.UTC(startDate.getFullYear(), startDate.getMonth())
      ) /
      (1000 * 60 * 60 * 24 * 7);
    this.rentalAverage =
      (this.customer_rentals.length / this.rentalWeeks) * 100;
  }

  calculateTopRentals() {
    this.getRentalCategoryList();
  }

  getRentalCategoryList() {
    this.customer_rentals.forEach(element => {
        this.getRentalCategory(element.rental_id).subscribe(res => {
        let category = res.name
        if(this.categories.has(category)) {
          this.categories.set(category, this.categories.get(category) + 1)
        } else {
          this.categories.set(category, 1);
        }
        this.topRentedCat = [...this.categories.entries()].reduce((a,e) => e[1] > a[1] ? e : a);
        return this.topRentedCat;
      })
    })
  }


  toggleActiveStatus() {
    this.activebool = !this.activebool;
  }
  
  getRentalCategory(id) {
    return this.rentalService.getRentalCategory(id);
  }

  onEnter() {
    const params = {
      customer_id: this.customer.customer_id,
      store_id: this.customer.store_id,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      address_id: this.customer.address_id,
      activebool: this.activebool,
      active: this.active,
    };
    this.customerService.updateCustomer(params).subscribe((res) => {
    });
  }

  deleteRental(id) {
    this.customerService.deleteRental(id).subscribe((res) => {
      location.reload();
    });
  }

  ngOnDestroy() {
    this.rentalSubscription.unsubscribe();
  }
}
