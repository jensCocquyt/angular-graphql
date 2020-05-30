import { Room } from '../room/room.model';
import { Guest } from '../guest/guest.model';

export interface Reservation {
  checkinDate: string;
  checkoutDate: string;
  guest: Guest;
  id: number;
  room: Room;
}
