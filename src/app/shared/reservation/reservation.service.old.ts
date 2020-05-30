import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GetAllReservations } from 'src/app/shared/reservation/getAllReservations';
import { Reservation } from './reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationServiceOld {
  constructor(private getAllReservations: GetAllReservations) {}

  public getAll(): Observable<Reservation[]> {
    return this.getAllReservations.watch().valueChanges.pipe(
      tap(() => console.log('getAllReservations')),
      map((result) => result.data.listReservations)
    );
  }
}
