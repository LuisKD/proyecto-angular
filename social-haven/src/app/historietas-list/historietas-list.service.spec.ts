import { TestBed } from '@angular/core/testing';

import { HistorietasListService } from './historietas-list.service';

describe('HistorietasListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistorietasListService = TestBed.get(HistorietasListService);
    expect(service).toBeTruthy();
  });
});
