import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { ReportingComponent } from './reporting/reporting.component';
import { CustomerReportComponent } from './reporting/customer-report/customer-report.component';
import { FilmReportComponent } from './reporting/film-report/film-report.component';
import { StaffReportComponent } from './reporting/staff-report/staff-report.component';
import { StoreReportComponent } from './reporting/store-report/store-report.component';
import { RentalReportComponent } from './reporting/rental-report/rental-report.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  {
    path: 'customer/:id',
    component: CustomerDetailComponent,
  },
  {
    path: 'reporting',
    component: ReportingComponent
  },
  {
    path: 'customer',
    component: CustomerReportComponent
  },
  {
    path: 'film',
    component: FilmReportComponent
  },
  {
    path: 'staff',
    component: StaffReportComponent
  },
  {
    path: 'store',
    component: StoreReportComponent
  },
  {
    path: 'rental',
    component: RentalReportComponent
  },
  {
    path: 'new-customer',
    component: NewCustomerComponent
  },
  {
    path: 'transaction',
    component: TransactionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
