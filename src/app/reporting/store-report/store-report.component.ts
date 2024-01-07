import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerRentals } from 'src/app/shared/customer-rentals/customer-rentals.model';
import { RentalService } from 'src/app/shared/rental/rental.service';
import { StoreRental } from 'src/app/shared/rental/store-rental.model';

@Component({
  selector: 'app-store-report',
  templateUrl: './store-report.component.html',
  styleUrls: ['./store-report.component.css']
})
export class StoreReportComponent {
  today;
  rentals;
  store_id: Number;
  dataSource;
  displayedColumns: string[] = ['inventory_id', 'title', 'rental_rate', 'replacement_cost'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private rentalService: RentalService){
    this.today = new Date();
  }

  runReport() {
      this.rentalService.getRentalsByStore(this.store_id).subscribe(res => {
      this.rentals = res;
      this.dataSource = new MatTableDataSource<StoreRental>(this.rentals);
      this.dataSource.paginator = this.paginator;
    });
  }

  printPage() {
    var a = window.open(''); 
    a.document.write('<html>'); 
    a.document.write('<body><p>' + this.today + '</p><table><tr><th>Inventory ID</th><th>Title</th><th>Rental Rate</th><th>Replacement Cost</th><tr>'); 
    this.rentals.forEach(element => {
      a.document.write('<tr><th>' + element.inventory_id+ '</th><th>' + element.title + '</th><th>' + element.rental_rate + '</th><th>' + element.replacement_cost+ '</th><tr>'); 
    });
    a.document.write('</table></body></html>'); 
    a.document.close(); 
    a.print(); 
  }

}
