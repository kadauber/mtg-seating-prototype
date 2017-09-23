import { Component, OnInit } from '@angular/core';
import { VenuesService } from '../venues.service';

@Component({
  selector: 'app-my-new-component',
  template: `
  <div>
    <h3>{{buttonGroup.name}}</h3>
    <form>
    <input [(ngModel)]="newButtonLabel" name="newLabel"/>
    <button (click)="onClick(event)" *ngFor='let button of buttonGroup.buttons' [disabled]="button.disabled" [type]="button.type">{{button.label}}</button>
    </form>
    <p *ngIf='buttonGroup'>We have a button group.</p>
    <p>{{ venuesDescription }}</p>
  </div>
  `,
  // templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  constructor(private venuesService:VenuesService) { }

  venuesDescription:string = '';

  ngOnInit() {
    console.log(this.venuesService.venues);
    this.venuesDescription = this.venuesService.getVenuesDescription();
  }

  newButtonLabel = '';

  buttonGroup = {
    name: 'My Buttons',
    buttons: [
      {
        label: 'Add Button',
        disabled: false,
        type: 'submit'
      },
      {
        label: 'Clear',
        disabled: true  
      }
    ],
  }

  onClick = (event) => {
    this.buttonGroup.buttons.push({
      label: this.newButtonLabel,
      disabled: false
    });
  }

}
