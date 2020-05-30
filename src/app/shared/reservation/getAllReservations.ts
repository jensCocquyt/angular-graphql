import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Reservation } from './reservation.model';
import { listReservations } from '../schema';

@Injectable({
  providedIn: 'root',
})
export class GetAllReservations extends Query<GetAllResponse> {
  document = listReservations;
}
export interface GetAllResponse {
  listReservations: Reservation[];
}
// return this.getAllReservations.watch().valueChanges.pipe(
//   map((result) => result.data.listReservations)
// );
