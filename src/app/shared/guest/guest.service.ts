import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Guest } from './guest.model';
import { listGuests } from '../schema';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  constructor(private apollo: Apollo) {}

  public getAll(): Observable<Guest[]> {
    return this.apollo
      .watchQuery<GetAllResponse>({
        query: listGuests,
      })
      .valueChanges.pipe(map((result) => result.data.listGuests));
  }
}
export interface GetAllResponse {
  listGuests: Guest[];
}
