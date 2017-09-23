import { Component, OnInit } from '@angular/core';
import { VenuesService } from '../venues.service';
import { SeatAssignmentsService } from '../seat-assignments.service';
import { SeatComponent } from '../seat/seat.component';
import { SeatState } from '../seat/seat-state.enum';

@Component({
  selector: 'app-klt',
  templateUrl: './klt.component.html',
  styleUrls: ['./klt.component.css']
})
export class KltComponent implements OnInit {

  constructor(private venuesService: VenuesService, private seatAssignmentsService: SeatAssignmentsService) { }

  centerSeats = [];
  leftSeats = [];
  rightSeats = [];

  ngOnInit() {
    this.centerSeats = this.venuesService.venues.klt.displaySeats.center;
    this.leftSeats = this.venuesService.venues.klt.displaySeats.left;    
    this.rightSeats = this.venuesService.venues.klt.displaySeats.right;
  }

  getSeatWidth(seatsInRow, totalWidth) {
    return totalWidth / seatsInRow + 'px';
  }

  assignSeat(seatID) {
    this.seatAssignmentsService.toggleSeat(seatID);
  }

  getSeatState(seatID) {
    let state;
    if (this.venuesService.isBadSeat('klt', seatID)) {
      state = SeatState.bad;
    } else if (this.seatAssignmentsService.isSelectedPartySeat(seatID)) {
      state = SeatState.marked;
    } else if (this.seatAssignmentsService.isAssignedSeat(seatID)) {
      state = SeatState.assigned;
    } else {
      state = SeatState.open;
    }
    return state;
  }
}
