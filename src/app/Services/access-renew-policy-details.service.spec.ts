import { TestBed } from '@angular/core/testing';

import { AccessRenewPolicyDetailsService } from './access-renew-policy-details.service';

describe('AccessRenewPolicyDetailsService', () => {
  let service: AccessRenewPolicyDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessRenewPolicyDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
