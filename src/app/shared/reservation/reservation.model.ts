import { Guest, Room } from '../models';

export interface Reservation {
  checkinDate: string;
  checkoutDate: string;
  guest: Guest;
  id: number;
  room: Room;
}
