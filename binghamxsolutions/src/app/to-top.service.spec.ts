import { TestBed } from '@angular/core/testing';

import { ToTopService } from './to-top.service';

describe('ToTopService', () => {
  let service: ToTopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToTopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
