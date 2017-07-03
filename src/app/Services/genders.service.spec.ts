import { TestBed, inject } from '@angular/core/testing';

import { GendersService } from './genders.service';

describe('GendersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GendersService]
    });
  });

  it('should be created', inject([GendersService], (service: GendersService) => {
    expect(service).toBeTruthy();
  }));
});
