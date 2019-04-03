import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/places.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  @Input() selectedMode: 'select' | 'random';
  startDate: string;
  endDate: string;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    const aviableFrom = new Date(this.selectedPlace.aviableFrom);
    const aviableTo = new Date(this.selectedPlace.aviableTo);
    if (this.selectedMode === 'random') {
      this.startDate = new Date(
        aviableFrom.getTime() +
          Math.random() *
            (aviableTo.getTime() -
              7 * 24 * 60 * 60 * 1000 -
              aviableFrom.getTime())
      ).toISOString();

      this.endDate =
      new Date(
        new Date(this.startDate).getTime() +
        Math.random() *
          (new Date(this.startDate).getTime() +
            6 * 24 * 60 * 60 * 1000 -
            new Date(this.startDate).getTime())
      ).toISOString();
    }
  }

  onCancel() {
    // 3 arguments  data,role,id
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalCtrl.dismiss({ message: 'This is dummy message' }, 'confirm');
  }
}
