import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmReportComponent } from './film-report.component';

describe('FilmReportComponent', () => {
  let component: FilmReportComponent;
  let fixture: ComponentFixture<FilmReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
