import { TestBed } from '@angular/core/testing';

import { ServiceDetailDataService } from './service-detail-data.service';

describe('ServiceDetailDataService', () => {
  let service: ServiceDetailDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDetailDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
