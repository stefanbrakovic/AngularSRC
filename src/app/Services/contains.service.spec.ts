import { TestBed, inject } from '@angular/core/testing';

import { ContainsService } from './contains.service';

describe('ContainsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContainsService]
    });
  });

  it('should be created', inject([ContainsService], (service: ContainsService) => {
    expect(service).toBeTruthy();
  }));
});
