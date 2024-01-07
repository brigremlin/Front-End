import { TestBed } from '@angular/core/testing';

import { CustomerRentalsService } from './customer-rentals.service';

describe('CustomerRentalsService', () => {
  let service: CustomerRentalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerRentalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
