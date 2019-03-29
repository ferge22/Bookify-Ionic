import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from 'src/app/services/places.service';
import { Place } from '../../places.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})

export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(private navCrtl: NavController, private route: ActivatedRoute, private placesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log(paramMap);
      if (!paramMap.has('placeId')) {
        this.navCrtl.navigateBack('/places/tabs/discover');
        return;
      }
        // return true if mached place id maches with url id
        this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlace() {
    // this.router.navigate(['/places/tabs/discover']);
    this.navCrtl.navigateBack('/places/tabs/discover');
  }

}
