import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/shared/reservation/reservation.model';
import { ReservationService } from '../../shared/reservation/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  reservations$: Observable<Reservation[]>;
  displayedColumns: string[] = [
    'id',
    'checkin',
    'checkout',
    'guest',
    'room',
    'actions',
  ];

  constructor(private resevationService: ReservationService) {}

  ngOnInit() {
    this.reservations$ = this.resevationService.getAll();
  }
  delete(reservation: Reservation) {
    this.resevationService.delete(reservation.id).subscribe();
  }
}
