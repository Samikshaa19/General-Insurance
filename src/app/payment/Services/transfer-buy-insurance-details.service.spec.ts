import { TestBed } from '@angular/core/testing';

import { TransferBuyInsuranceDetailsService } from './transfer-buy-insurance-details.service';

describe('TransferBuyInsuranceDetailsService', () => {
  let service: TransferBuyInsuranceDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferBuyInsuranceDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
