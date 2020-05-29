import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { Reservation } from './reservation.model';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private apollo: Apollo) {}

  public getAll(): Observable<Reservation[]> {
    return this.apollo
      .watchQuery<GetAllResponse>({
        query: gql`
          query ListReservations {
            listReservations {
              id
              guest {
                id
                name
              }
              room {
                id
                name
                number
              }
              checkinDate
              checkoutDate
            }
          }
        `,
        // fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(
        tap(() => console.log('getAllReservations')),
        map((result) => result.data.listReservations)
      );
  }
}

export interface GetAllResponse {
  listReservations: Reservation[];
}
