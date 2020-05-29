import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  rooms: any;
  loading: boolean;
  error: any;

  constructor(private roomsService: RoomsService) {}

  ngOnInit() {
    this.roomsService.getAll().subscribe((result) => {
      this.rooms = result.data && result.data.listRooms;
      this.loading = result.loading;
      this.error = result.errors;
    });

    this.roomsService.search(false, false).subscribe((result) => {
      console.log(result);
    });
  }
}
