import { TestBed, inject } from '@angular/core/testing';

import { ServicePriceService } from './service-price.service';

describe('ServicePriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicePriceService]
    });
  });

  it('should be created', inject([ServicePriceService], (service: ServicePriceService) => {
    expect(service).toBeTruthy();
  }));
});
