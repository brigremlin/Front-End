import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, lastValueFrom, map, startWith } from 'rxjs';
import { CustomerService } from '../shared/customer/customer.service';
import { MatOption } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Rental } from '../shared/rental/rental.model';
import { FilmService } from '../shared/film/film.service';
import { DatePipe } from '@angular/common';
import { Film } from '../shared/film/film.model';
import { ModalComponent } from '../components/modal/modal.component';
import { RentalService } from '../shared/rental/rental.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  myControl = new FormControl('');
  rentalControl = new FormControl('');
  filteredCustomers;
  filteredRentals;
  customers;
  customer_id: number;
  rentals;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('alertModal') modal: ModalComponent;
  displayedColumns: string[] = [
    'film_id',
    'title',
    'rental_rate',
    'rental_duration',
    'add',
  ];
  dataSource;
  film_id;
  rental_cart: Film[] = [];
  cart_total = 0;
  inventory_id;
  alert = "";
  selectedCustomer;

  constructor(
    private customerService: CustomerService,
    private filmService: FilmService,
    private datePipe: DatePipe,
    private rentalService: RentalService
  ) {}

  async ngOnInit() {
    let result = this.customerService.getCustomers();
    this.customers = await lastValueFrom(result);
    this.filteredCustomers = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );

    let rentalList = this.filmService.getFilms();
    this.rentals = await lastValueFrom(rentalList);
    this.dataSource = new MatTableDataSource<Rental>(this.rentals);
    this.dataSource.paginator = this.paginator;
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.customers.filter((option) =>
      option.first_name.toLowerCase().includes(filterValue)
    );
  }

  onCustomerSelect(option: MatOption) {
    this.customer_id = option.value.split(' ')[2];
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addRental(rental) {
    this.rental_cart.push(rental);
    this.cart_total = this.cart_total + rental.rental_rate;
  }

  deleteRental(rental) {
    const index = this.rental_cart.indexOf(rental);
    if (index != -1) {
      this.rental_cart.splice(index, 1);
    }
    this.cart_total = this.cart_total - rental.rental_rate;
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  payNow() {
  }

  async completeTransaction() {
    console.log(this.customer_id);
    if (this.customer_id == null) {
      this.openModal("Your rental is missing a customer! Please select the customer's account and resubmit the rental order.");
    } else {
      let customer = this.customerService.findCustomer(this.customer_id);
      this.selectedCustomer = await lastValueFrom(customer);
      let inventories;
      console.log(this.rental_cart);
      this.rental_cart.forEach((element) => {
        this.filmService.getInventoryId(element.film_id).subscribe((res) => {
          inventories = res;
          let today = new Date();
          let return_date = today.getTime() + 7;
          const params = {
            rental_id: this.randomNumber(18000, 25000),
            rental_date: today,
            inventory_id: inventories,
            customer_id: Number(this.customer_id),
            return_date: return_date,
            staff_id: 1,
          };
          this.rentalService.addCustomerRental(params).subscribe(res => {
            const paymentParams = {
              payment_id: this.randomNumber(40000, 80000),
              customer_id: Number(this.customer_id),
              staff_id: 1,
              rental_id: res.rental_id,
              amount: element.rental_rate,
              payment_date: today
            };
            this.rentalService.postPayment(paymentParams).subscribe(paymentRes => {
              const rentalParams = {
                customer_id: Number(this.customer_id),
                first_name: this.selectedCustomer.first_name,
                last_name: this.selectedCustomer.last_name,
                rental_id: paymentRes.rental_id,
                rental_date: res.rental_date,
                return_date: res.return_date,
                staff_id: paymentRes.staff_id,
                payment_id: paymentRes.payment_id,
                amount: paymentRes.amount
              };
              this.rentalService.postCustomerRentals(rentalParams).subscribe(rentalRes => {
                this.openModal("Your transaction is complete!");
              })
            })
          })
        });
      });
    }
  }

  emptyCart() {
    this.rental_cart = [];
    this.cart_total = 0;
  }

  openModal(alert) {
    this.modal.open(alert);
  }
}
