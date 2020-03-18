import {TestBed} from '@angular/core/testing';

import {FireDBService} from './fire-db.service';

describe('FireDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireDBService = TestBed.get(FireDBService);
    expect(service).toBeTruthy();
  });
});
