import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/shared/customer/customer.model';
import { CustomerService } from 'src/app/shared/customer/customer.service';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.css'],
})
export class CustomerReportComponent implements OnInit {
  customers: Customer[] = [];
  today;
  previewOnly;
  dataSource;
  displayedColumns: string[] = ['position', 'store', 'name', 'email', 'active'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.today = new Date();
    this.customerService.getCustomers().subscribe((res) => {
      this.customers = res;
      this.dataSource = new MatTableDataSource<Customer>(this.customers);
      this.dataSource.paginator = this.paginator;
    });
  }

  printPage() {
    var a = window.open(''); 
    a.document.write('<html>'); 
    a.document.write('<body><p>' + this.today + '</p><table><tr><th>Customer ID</th><th>Store ID</th><th>Customer Name</th><th>Email</th><th>Status</th><tr>'); 
    this.customers.forEach(element => {
      a.document.write('<tr><th>' + element.customer_id + '</th><th>' + element.store_id + '</th><th>' + element.first_name + '</th><th>' + element.email + '</th><th>' + element.activebool + '</th><tr>'); 
    });
    a.document.write('</table></body></html>'); 
    a.document.close(); 
    a.print(); 
  }
}
