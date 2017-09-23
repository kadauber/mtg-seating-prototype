import { TestBed, inject } from '@angular/core/testing';

import { SeatAssignmentsService } from './seat-assignments.service';

describe('SeatAssignmentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeatAssignmentsService]
    });
  });

  it('should be created', inject([SeatAssignmentsService], (service: SeatAssignmentsService) => {
    expect(service).toBeTruthy();
  }));
});
