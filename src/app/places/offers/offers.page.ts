import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import { Place } from '../places.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedOffers: Place[];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedOffers = this.placesService.places;
  }

}
