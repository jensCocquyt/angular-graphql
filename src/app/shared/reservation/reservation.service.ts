import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { addReservation, listReservations, removeReservation } from '../schema';
import { Reservation } from './reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private apollo: Apollo) {}

  public getAll(): Observable<Reservation[]> {
    return this.apollo
      .watchQuery<GetAllResponse>({
        query: listReservations,
        // fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(map((result) => result.data.listReservations));
  }

  public add(
    addReservationInput: AddReservationInputType
  ): Observable<Reservation> {
    return this.apollo
      .mutate<AddReservationResponse>({
        mutation: addReservation,
        variables: {
          reservation: addReservationInput,
        },
        // refetchQueries: [
        //   {
        //     query: listReservations,
        //   },
        // ],
      })
      .pipe(map((result) => result.data.addReservation));
  }
  public remove(id: number): Observable<{ id: number }> {
    return this.apollo
      .mutate<RemoveReservationResponse>({
        mutation: removeReservation,
        variables: {
          id,
        },
        // refetchQueries: [
        //   {
        //     query: listReservations,
        //   },
        // ],
      })
      .pipe(map((result) => result.data.removeReservation));
  }
}

export interface GetAllResponse {
  listReservations: Reservation[];
}

export interface AddReservationResponse {
  addReservation: Reservation;
}

export interface RemoveReservationResponse {
  removeReservation: { id: number };
}

export interface AddReservationInputType {
  roomId: number;
  guestId: number;
  checkinDate: string;
  checkoutDate: string;
}
