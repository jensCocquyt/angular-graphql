// import { Component, OnInit } from '@angular/core';
// import { RoomService } from '../shared/room/room.service';

// @Component({
//   selector: 'app-rooms',
//   templateUrl: './rooms.component.html',
//   styleUrls: ['./rooms.component.scss'],
// })
// export class RoomsComponent implements OnInit {
//   rooms: any;
//   loading: boolean;
//   error: any;

//   constructor(private roomService: RoomService) {}

//   ngOnInit() {
//     this.roomService.getAll().subscribe((result) => {
//       this.rooms = result.data && result.data.listRooms;
//       this.loading = result.loading;
//       this.error = result.errors;
//     });

//     this.roomService.search(false, false).subscribe((result) => {
//       console.log(result);
//     });
//   }
// }
