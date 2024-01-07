import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})

export class ReportingComponent {
  selectedReport = '';
  @ViewChild('reportOptions') reportOptions!: ElementRef;

  constructor(private router: Router){}

  onSelected(value) {
    this.selectedReport = this.reportOptions.nativeElement.value;
    if(value) {
      this.router.navigate([value]);
    }
  }


}
