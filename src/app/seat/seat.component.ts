import { Component, OnInit, Input } from '@angular/core';

import { SeatState } from './seat-state.enum';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
  @Input() seatID: string = '';
  @Input() isHandicapped: boolean = false;
  @Input() state: SeatState = SeatState.open;
  @Input() width: string = '30px';
  @Input() disabled: boolean = false;
  @Input() handicapped: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
