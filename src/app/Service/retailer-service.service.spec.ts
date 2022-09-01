import { TestBed } from '@angular/core/testing';

import { RetailerServiceService } from './retailer-service.service';

describe('RetailerServiceService', () => {
  let service: RetailerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetailerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
