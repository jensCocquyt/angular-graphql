import { Query, Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Reservation } from './reservation.model';
import { listReservations } from '../schema';
import {
  RemoveReservationResponse,
  AddReservationResponse,
} from './reservation.service';

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

@Injectable({
  providedIn: 'root',
})
export class AddReservation extends Mutation<AddReservationResponse> {
  document = gql`
    mutation AddReservation($reservation: AddReservationInputType!) {
      addReservation(reservation: $reservation) {
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

@Injectable({
  providedIn: 'root',
})
export class RemoveReservation extends Mutation<RemoveReservationResponse> {
  document = gql`
    mutation RemoveReservation($id: Int) {
      removeReservation(id: $id) {
        id
      }
    }
  `;
}

export interface GetAllResponse {
  listReservations: Reservation[];
}
