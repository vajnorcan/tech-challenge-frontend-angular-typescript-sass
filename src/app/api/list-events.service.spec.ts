import { TestBed, inject } from '@angular/core/testing';

import { ListEventsService } from './list-events.service';

describe('ListEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListEventsService]
    });
  });

  it('should be created', inject([ListEventsService], (service: ListEventsService) => {
    expect(service).toBeTruthy();
  }));
});
