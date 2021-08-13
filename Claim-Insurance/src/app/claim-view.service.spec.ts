import { TestBed } from '@angular/core/testing';

import { ClaimViewService } from './claim-view.service';

describe('ClaimViewService', () => {
  let service: ClaimViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
