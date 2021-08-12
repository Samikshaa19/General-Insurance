import { TestBed } from '@angular/core/testing';

import { CalculateChargesService } from './calculate-charges.service';

describe('CalculateChargesService', () => {
  let service: CalculateChargesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateChargesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
