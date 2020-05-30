import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { listRooms, searchRooms } from '../schema';
import { Room } from './room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private apollo: Apollo) {}

  public getAll(): Observable<Room[]> {
    return this.apollo
      .watchQuery<GetAllResponse>({
        query: listRooms,
      })
      .valueChanges.pipe(map((result) => result.data.listRooms));
  }

  public search(available: boolean = true, wifi: boolean = true): any {
    return this.apollo.watchQuery<SearchResponse>({
      query: searchRooms,
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
