import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './reservation/overview/overview.component';
import { AddComponent } from './reservation/add/add.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  // { path: 'rooms', component: RoomsComponent },
  {
    path: 'reservations',
    component: ReservationComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'add',
        component: AddComponent,
      },
    ],
  },
  { path: '', redirectTo: '/reservations/overview', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
