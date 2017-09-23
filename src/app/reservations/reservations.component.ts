import { Component, OnInit, OnChanges } from '@angular/core';

import { SeatAssignmentsService } from '../seat-assignments.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  partyIDs = [];

  constructor(private seatAssignmentsService: SeatAssignmentsService) {
    this.partyIDs = this.seatAssignmentsService.getAllPartyIDs();
  }

  ngOnInit() { }

  selectReservation(partyID) {
    console.log('selected ' + partyID);
    this.seatAssignmentsService.selectedPartyID = partyID;
  }

  formatSeats(partyID) {
    let seatString = '';
    this.seatAssignmentsService.getPartySeats(partyID)
      .sort(this.compareSeats)
      .forEach(seat => seatString += seat + " ");
    return seatString;
  }

  compareSeats(seat1: string, seat2: string) {
    if (seat1[0] !== seat2[0]) {
      return seat1[0] < seat2[0] ? -1 : 1;
    } else {
      let seat1num = parseInt(seat1.substring(1, seat1.length));
      let seat2num = parseInt(seat2.substring(1, seat2.length))
      return seat1num - seat2num;
    }
  }
}
