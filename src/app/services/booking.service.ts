import { Injectable } from '@angular/core';
import { Booking } from '../bookings/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 'zyx',
      placeId: 'p1',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 2,
      userId: 'abc'
    }
  ];

  get bookings () {
    return [...this._bookings];
  }

  constructor() { }
}
