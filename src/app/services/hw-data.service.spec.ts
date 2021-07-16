import { TestBed } from '@angular/core/testing';

import { HwDataService } from './hw-data.service';

describe('HwDataService', () => {
  let service: HwDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HwDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
