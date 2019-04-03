import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/places.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})

export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel() {
    // 3 arguments  data,role,id
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalCtrl.dismiss({message: 'This is dummy message'}, 'confirm');
  }

}
