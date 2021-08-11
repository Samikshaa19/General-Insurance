import { TestBed } from '@angular/core/testing';

import { AccessPlanDetailsService } from './access-plan-details.service';

describe('AccessPlanDetailsService', () => {
  let service: AccessPlanDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessPlanDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
