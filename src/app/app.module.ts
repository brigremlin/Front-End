import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FilterPipe } from './pipes/filter.pipe';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ReportingComponent } from './reporting/reporting.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule, DatePipe } from '@angular/common';
import { CustomerReportComponent } from './reporting/customer-report/customer-report.component';
import {MatTableModule} from '@angular/material/table';
import { FilmReportComponent } from './reporting/film-report/film-report.component';
import { StoreReportComponent } from './reporting/store-report/store-report.component';
import { StaffReportComponent } from './reporting/staff-report/staff-report.component';
import { RentalReportComponent } from './reporting/rental-report/rental-report.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { ModalComponent } from './components/modal/modal.component';
import { TransactionComponent } from './transaction/transaction.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    FilterPipe,
    CustomerDetailComponent,
    ReportingComponent,
    CustomerReportComponent,
    FilmReportComponent,
    StoreReportComponent,
    StaffReportComponent,
    RentalReportComponent,
    NewCustomerComponent,
    ModalComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    CommonModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
