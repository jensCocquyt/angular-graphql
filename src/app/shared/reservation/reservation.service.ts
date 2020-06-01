import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { addReservation, listReservations } from '../schema';
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

  public addReservation(addReservationInput: AddReservationInputType) {
    return this.apollo.mutate({
      mutation: addReservation,
      variables: {
        reservation: addReservationInput,
      },
      // refetchQueries: [
      //   {
      //     query: listReservations,
      //   },
      // ],
    });
  }
}

export interface GetAllResponse {
  listReservations: Reservation[];
}

export interface AddReservationInputType {
  roomId: number;
  guestId: number;
  checkinDate: string;
  checkoutDate: string;
}
