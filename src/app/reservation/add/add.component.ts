import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Guest } from 'src/app/shared/guest/guest.model';
import { GuestService } from 'src/app/shared/guest/guest.service';
import { ReservationService } from 'src/app/shared/reservation/reservation.service';
import { Room } from 'src/app/shared/room/room.model';
import { RoomService } from 'src/app/shared/room/room.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  form: FormGroup;
  rooms$: Observable<Room[]>;
  guests$: Observable<Guest[]>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private reservationService: ReservationService,
    private roomService: RoomService,
    private router: Router,
    private guestService: GuestService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      roomId: ['', Validators.required],
      guestId: ['', Validators.required],
      checkinDate: [new Date(), Validators.required],
      checkoutDate: [new Date(), Validators.required],
    });
    this.rooms$ = this.roomService.getAll();
    this.guests$ = this.guestService.getAll();
  }

  onSubmit() {
    this.reservationService
      .add({
        ...this.form.value,
        checkinDate: this.formatDate(this.form.value.checkinDate),
        checkoutDate: this.formatDate(this.form.value.checkoutDate),
      })
      .subscribe(() => {
        this.router.navigate(['../overview'], {
          relativeTo: this.activatedRoute,
        });
      });
  }

  private formatDate(date: Date) {
    return date
      ? `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
      : date;
  }
}
