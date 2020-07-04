import { TestBed } from '@angular/core/testing';

import { AleartifyService } from './aleartify.service';

describe('AleartifyService', () => {
  let service: AleartifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AleartifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
