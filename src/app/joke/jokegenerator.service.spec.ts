import { TestBed } from '@angular/core/testing';

import { JokegeneratorService } from './jokegenerator.service';

describe('JokegeneratorService', () => {
  let service: JokegeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokegeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
