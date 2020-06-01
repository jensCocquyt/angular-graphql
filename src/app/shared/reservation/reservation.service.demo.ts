import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
  GetAllReservations,
  RemoveReservation,
  AddReservation,
} from 'src/app/shared/reservation/reservation.graphql';
import { Reservation } from './reservation.model';
import {
  RemoveReservationResponse,
  AddReservationInputType,
} from './reservation.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationServiceDemo {
  constructor(
    private getAllReservations: GetAllReservations,
    private removeReservation: RemoveReservation,
    private addReservation: AddReservation
  ) {}

  public getAll(): Observable<Reservation[]> {
    return this.getAllReservations
      .watch()
      .valueChanges.pipe(map((result) => result.data.listReservations));
  }

  public remove(id: number): Observable<{ id: number }> {
    return this.removeReservation
      .mutate({ id })
      .pipe(map((result) => result.data.removeReservation));
  }

  public add(reservation: AddReservationInputType): Observable<Reservation> {
    return this.addReservation
      .mutate({ reservation })
      .pipe(map((result) => result.data.addReservation));
  }
}
