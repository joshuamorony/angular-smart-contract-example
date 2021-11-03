import { TestBed } from '@angular/core/testing';

import { ExplorersService } from './explorers.service';

describe('ExplorersService', () => {
  let service: ExplorersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplorersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
