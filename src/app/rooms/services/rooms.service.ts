import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Room } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private apollo: Apollo) {}

  public getAll(): Observable<ApolloQueryResult<GetAllResponse>> {
    return this.apollo.watchQuery<GetAllResponse>({
      query: gql`
        query AllRooms {
          listRooms {
            id
            name
            status
            hasWifi
          }
        }
      `,
    }).valueChanges;
  }

  public search(available: boolean = true, wifi: boolean = true): any {
    return this.apollo.watchQuery<SearchResponse>({
      query: gql`
        query AvailableWifiRooms($available: Boolean, $wifi: Boolean) {
          searchRooms(available: $available, wifi: $wifi) {
            id
            name
            status
            hasWifi
          }
        }
      `,
      variables: {
        available,
        wifi,
      },
    }).valueChanges;
  }
}

export interface GetAllResponse {
  listRooms: Room[];
}
export interface SearchResponse {
  listRooms: Room[];
}
