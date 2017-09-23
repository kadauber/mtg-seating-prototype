import { Injectable } from '@angular/core';

import { VenuesService } from './venues.service';

@Injectable()
export class SeatAssignmentsService {

  private parties;
  selectedPartyID: string = '';
  assignedSeats = {};

  constructor(private venuesService: VenuesService) {
    this.parties = {
      'rachael': {
        name: "Rachael Devlin",
        size: 2,
        seatList: {}
      },
      'kigaltan': {
        name: "David Ricardo",
        size: 5,
        seatList: {}
      },
      'favela': {
        name: "David Favela",
        size: 2,
        seatList: {}
      },
      'lagrassa': {
        name: "Alex Lagrassa",
        size: 1,
        seatList: {}
      }
    }

    this.venuesService.venues.klt.seats.forEach((seatID) => {
      this.assignedSeats[seatID] = false;
    });
  }

  getAllPartyIDs() {
    return Object.keys(this.parties);
  }

  getSelectedPartySeats() {
    return Object.keys(this.parties[this.selectedPartyID].seatList)
      .filter(seat => this.parties[this.selectedPartyID].seatList[seat]);
  }

  getPartySeats(partyID) {
    return Object.keys(this.parties[partyID].seatList)
      .filter(seat => this.parties[partyID].seatList[seat]);
  }

  needsSeats(partyID) {
    return this.getNumberOfSeatsRemaining(partyID) > 0;
  }

  hasEnoughSeats(partyID) {
    return this.getNumberOfSeatsRemaining(partyID) == 0;
  }

  hasTooManySeats(partyID) {
    return this.getNumberOfSeatsRemaining(partyID) < 0;
  }

  toggleSeat(seatID) {
    if (this.selectedPartyID && (this.isOpenSeat(seatID) || this.isSelectedPartySeat(seatID))) {
      this.parties[this.selectedPartyID].seatList[seatID] = !this.parties[this.selectedPartyID].seatList[seatID];
      this.assignedSeats[seatID] = this.parties[this.selectedPartyID].seatList[seatID];
      console.log(this.parties[this.selectedPartyID]);
    }
  }

  getNumberOfSeatsAssigned(partyID) {
    return Object.keys(this.parties[partyID].seatList)
      .filter(seat => this.parties[partyID].seatList[seat])
      .length;
  }

  getNumberOfSeatsRemaining(partyID) {
    return this.parties[partyID].size - this.getNumberOfSeatsAssigned(partyID);
  }

  isOpenSeat(seatID) {
    return !this.venuesService.isBadSeat('klt', seatID) && !this.isAssignedSeat(seatID);
  }

  isAssignedSeat(seatID) {
    return this.assignedSeats[seatID];
  }

  isSelectedPartySeat(seatID) {
    if (!this.selectedPartyID) {
      return false;
    } else {
      return this.parties[this.selectedPartyID].seatList[seatID];      
    }
  }
}
