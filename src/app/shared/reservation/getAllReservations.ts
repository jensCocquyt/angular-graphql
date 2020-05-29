import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Reservation } from './reservation.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllReservations extends Query<GetAllResponse> {
  document = gql`
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
  `;
}
export interface GetAllResponse {
  listReservations: Reservation[];
}
// return this.getAllReservations.watch().valueChanges.pipe(
//   map((result) => result.data.listReservations)
// );
