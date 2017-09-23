import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { KltComponent } from './klt/klt.component';
import { SalaComponent } from './sala/sala.component';
import { SeatComponent } from './seat/seat.component';

import { VenuesService } from './venues.service';
import { SeatAssignmentsService } from './seat-assignments.service';
import { ReservationsComponent } from './reservations/reservations.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'klt', 
    pathMatch: 'full'
  },
  {
    path: 'klt',
    component: KltComponent
  },
  {
    path: 'sala',
    component: SalaComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    KltComponent,
    SalaComponent,
    SeatComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [VenuesService, SeatAssignmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
