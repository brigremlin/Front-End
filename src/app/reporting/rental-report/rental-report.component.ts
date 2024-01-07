import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerRentals } from 'src/app/shared/customer-rentals/customer-rentals.model';
import { CustomerService } from 'src/app/shared/customer/customer.service';
import { RentalService } from 'src/app/shared/rental/rental.service';

@Component({
  selector: 'app-rental-report',
  templateUrl: './rental-report.component.html',
  styleUrls: ['./rental-report.component.css']
})
export class RentalReportComponent implements OnInit {

  rentals;
  dataSource;
  displayedColumns: string[] = ['customer_id', 'customer_name', 'rental_id', 'rental_date', 'return_date', 'staff_id', 'amount'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  today;

  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.today = new Date();
    this.rentalService.getAllRentals().subscribe(res => {
      this.rentals = res;
      this.dataSource = new MatTableDataSource<CustomerRentals>(this.rentals);
      this.dataSource.paginator = this.paginator;
    });
  }

  printPage() {
    var a = window.open(''); 
    a.document.write('<html>'); 
    a.document.write('<body><p>' + this.today + '</p><table><tr><th>Customer ID</th><th>Customer Name</th><th>Rental ID</th><th>Rental Date</th><th>Return Date</th><th>Staff ID</th><th>Amount</th><tr>'); 
    this.rentals.forEach(element => {
      a.document.write('<tr><th>' + element.customer_id + '</th><th>' + element.first_name + " " + element.last_name + '</th><th>' + element.rental_id + '</th><th>' + element.rental_date + '</th><th>' + element.return_date + '</th><th>' + element.staff_id + '</th><th>' + element.amount + '</th><tr>'); 
    });
    a.document.write('</table></body></html>'); 
    a.document.close(); 
    a.print(); 
  }

}
