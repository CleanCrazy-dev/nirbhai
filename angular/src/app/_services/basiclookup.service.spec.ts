import { TestBed } from '@angular/core/testing';

import { BasicLookupService } from './basiclookup.service';

describe('Basic.LookupService', () => {
  let service: BasicLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
