import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import { Place } from '../places.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})

export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];

  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placeService.places;
    this.listedLoadedPlaces = this.loadedPlaces.slice(1);
  }

}
