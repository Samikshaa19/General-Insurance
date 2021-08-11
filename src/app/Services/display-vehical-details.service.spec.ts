import { TestBed } from '@angular/core/testing';

import { DisplayVehicalDetailsService } from './display-vehical-details.service';

describe('DisplayVehicalDetailsService', () => {
  let service: DisplayVehicalDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayVehicalDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
