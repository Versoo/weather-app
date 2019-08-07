import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Place} from "./places/models/place.model";
import {map} from "rxjs/operators";
import {PlacesState} from "./places/store/places.reducer";
import {AppState} from "./store/app.reducer";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  favoritePlaces$: Observable<Place[]>;
  searchHistoryPlaces$: Observable<Place[]>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    // TODO: Custom selector for Favorites State
    this.favoritePlaces$ = this.store.select('places')
      .pipe(
        map((placesState: PlacesState) =>
          placesState.history.filter((place: Place) => place.favorite)
        ),
      );

    // TODO: Custom selector for History State
    this.searchHistoryPlaces$ = this.store.select('places')
      .pipe(
        map((placesState: PlacesState) => placesState.history),
      );
  }
}
