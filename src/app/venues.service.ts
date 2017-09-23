import { Injectable } from '@angular/core';

@Injectable()
export class VenuesService {

  constructor() { }

  readonly venues = {
    'klt': {
      shortName: 'KLT',
      longName: 'Kresge Little Theater',
      seats: [
        'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10',
        'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10',
        'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11',
        'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11',
        'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12',
        'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10', 'J11', 'J12',
        'K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9', 'K10', 'K11', 'K12',
        'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'L10', 'L11',
        
        'D21', 'D23', 'D25', 'D27', 'D29',
        'E21', 'E23', 'E25', 'E27', 'E29',
        'F21', 'F23', 'F25', 'F27', 'F29', 'F31',
        'G21', 'G23', 'G25', 'G27', 'G29', 'G31',
        'H21', 'H23', 'H25', 'H27', 'H29', 'H31',
        'J21', 'J23', 'J25', 'J27', 'J29', 'J31', 'J33',
        'K21', 'K23', 'K25', 'K27', 'K29', 'K31',
        'L21', 'L23', 'L25', 'L27', 'L29', 'L31',

        'D22', 'D24', 'D26', 'D28', 'D30',
        'E22', 'E24', 'E26', 'E28', 'E30',
        'F22', 'F24', 'F26', 'F28', 'F30', 'F32',
        'G22', 'G24', 'G26', 'G28', 'G30', 'G32',
        'H22', 'H24', 'H26', 'H28', 'H30', 'H32',
        'J22', 'J24', 'J26', 'J28', 'J30', 'J32', 'J34',
        'K22', 'K24', 'K26', 'K28', 'K30', 'K32',
        'L22', 'L24', 'L26', 'L28', 'L30', 'L32'
      ],
      displaySeats: {
        'center': [
          ['',  'L11', 'L10', 'L9', 'L8', 'L7', 'L6', 'L5', 'L4', 'L3', 'L2', ''],          
          ['K12', 'K11', 'K10', 'K9', 'K8', 'K7', 'K6', 'K5', 'K4', 'K3', 'K2', 'K1'],
          ['J12', 'J11', 'J10', 'J9', 'J8', 'J7', 'J6', 'J5', 'J4', 'J3', 'J2', 'J1'],
          ['H12', 'H11', 'H10', 'H9', 'H8', 'H7', 'H6', 'H5', 'H4', 'H3', 'H2', 'H1'],
          ['G11', 'G10', 'G9', 'G8', 'G7', 'G6', 'G5', 'G4', 'G3', 'G2', 'G1'],
          ['F11', 'F10', 'F9', 'F8', 'F7', 'F6', 'F5', 'F4', 'F3', 'F2', 'F1'],
          ['E10', 'E9', 'E8', 'E7', 'E6', 'E5', 'E4', 'E3', 'E2', 'E1'],
          ['D10', 'D9', 'D8', 'D7', 'D6', 'D5', 'D4', 'D3', 'D2', 'D1']
        ],
        'right': [
          ['L21', 'L23', 'L25', 'L27', 'L29', 'L31',''],
          ['K21', 'K23', 'K25', 'K27', 'K29', 'K31',''],
          ['J21', 'J23', 'J25', 'J27', 'J29', 'J31', 'J33'],
          ['H21', 'H23', 'H25', 'H27', 'H29', 'H31'],
          ['G21', 'G23', 'G25', 'G27', 'G29', 'G31'],
          ['F21', 'F23', 'F25', 'F27', 'F29', 'F31'],
          ['E21', 'E23', 'E25', 'E27', 'E29'],
          ['D21', 'D23', 'D25', 'D27', 'D29'],
        ],
        'left': [
          ['', 'L32', 'L30', 'L28', 'L26', 'L24', 'L22'],
          ['', 'K32', 'K30', 'K28', 'K26', 'K24', 'K22'],
          ['J34', 'J32', 'J30', 'J28', 'J26', 'J24', 'J22'],
          ['H32', 'H30', 'H28', 'H26', 'H24', 'H22'],
          ['G32', 'G30', 'G28', 'G26', 'G24', 'G22'],
          ['F32', 'F30', 'F28', 'F26', 'F24', 'F22'],
          ['E30', 'E28', 'E26', 'E24', 'E22'],
          ['D30', 'D28', 'D26', 'D24', 'D22'],
        ]
      }
    },
    'sala': {
      shortName: 'La Sala',
      longName: 'La Sala de Puerto Rico',
      seats: []
    }
  };

  getVenuesDescription() {
    return "We don't have very many venue options.";
  }

  readonly badSeats = {
    klt: ['D5']
  }

  readonly handicappedSeats = {
    klt: ['L22', 'K22', 'K21', 'L21']
  }

  isBadSeat(venueID, seatID) {
    return this.badSeats[venueID].includes(seatID);
  }

  isHandicappedSeat(venueID, seatID) {
    return this.handicappedSeats[venueID].includes(seatID);
  }
}
