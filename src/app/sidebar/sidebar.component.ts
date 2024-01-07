import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  screenWidth: number;

  private screenWidth$ = new BehaviorSubject<number>(window.innerWidth);
  @ViewChild('sidenav') sidenav: MatSidenav;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  constructor() { }

  ngOnInit() {
    this.screenWidth$.subscribe(width => {
      this.screenWidth = width;
    });
  }

  close() {
    this.sidenav.close();
  }


}
