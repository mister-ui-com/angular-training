import { TestBed } from '@angular/core/testing';

import { EntitlementService } from './entitlement.service';

describe('EntitlementService', () => {
  let service: EntitlementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntitlementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
