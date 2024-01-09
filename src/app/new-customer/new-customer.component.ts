import { Component, ViewChild } from '@angular/core';
import { CustomerService } from '../shared/customer/customer.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css'],
})
export class NewCustomerComponent {
  first_name: any;
  last_name = '';
  email = '';
  customer_id: number;
  store_id = 1;
  activebool = true;
  active = 1;
  @ViewChild('form') form: NgForm;
  @ViewChild('modal', {static: false}) modal: ModalComponent;
  alert="";

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  toggleActiveStatus() {
    this.activebool = !this.activebool;
    if (this.active == 1) {
      this.active = 0;
    } else {
      this.active = 1;
    }
  }

  getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  openModal(alert) {
    this.modal.open(alert);
  }

  onEnter() {
    if (this.form.invalid) {
      this.modal.open("Your form is invalid. Please check your information and resubmit.");
    } else {
      let customer_id = this.getRandomNum(600, 9900);
      const params = {
        customer_id: customer_id,
        store_id: this.store_id,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        activebool: this.activebool,
        active: this.active,
        address_id: 123,
      };
      this.customerService.addCustomer(params).subscribe((res) => {
        this.router.navigateByUrl('/customer/' + customer_id);
      });
    }
  }
}
