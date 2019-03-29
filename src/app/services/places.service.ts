import { Injectable } from '@angular/core';
import { Place } from '../places/places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1',
    'Manhattan Mansion',
    'In the heart of New York City', 
    'https://upload.wikimedia.org/wikipedia/commons/e/e8/Hamilton_MT_Daly_Mansion_2.jpg',
     499.99
    ),
     new Place('p2',
     'L\'Amour Toujours',
     'A romantic place in Paris',
     'https://s-ec.bstatic.com/images/hotel/max1024x768/120/120685028.jpg',
      189.99
    ),
    new Place('p3',
    'The Foggy Palace',
    'Not your average city trip!',
    'https://c1.staticflickr.com/8/7149/6593601281_a6e79d1252_b.jpg',
     99.99
   ),

  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    // find gets single place for mached place id we passed, ... spread operator to pull out mached id place to new Object
    return {...this._places.find(p => p.id === id)};
  }
}
