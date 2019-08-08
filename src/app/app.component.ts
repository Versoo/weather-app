import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, pipe, Subscription} from "rxjs";
import {Place} from "./places/models/place.model";
import {AppState} from "./store/app.reducer";
import {Store} from "@ngrx/store";
import {WeatherUpdatePlace} from "./places/store/places.actions";
import {ICoordinates} from "./places/services/coordinates.interface";
import {OpenWeatherService} from "./places/services/open-weather.service";
import {tap} from "rxjs/internal/operators/tap";
import {LayoutSate} from "./shared/store/layout.reducer";
import {getFavoritePlaces, getPlacesHistory} from "./places/store/places.seletctors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  layoutState$: Observable<LayoutSate>;
  favoritePlaces$: Observable<Place[]>;
  searchHistoryPlaces$: Subscription;
  searchHistoryPlaces: Place[];


  autoWeatherLoader;

  constructor(private store: Store<AppState>, private openWeatherService: OpenWeatherService) {

  }

  ngOnInit() {
    this.layoutState$ = this.store.select('layout');
    this.favoritePlaces$ = this.store.select(pipe(getFavoritePlaces));
    this.searchHistoryPlaces$ = this.store.select(getPlacesHistory)
      .subscribe((places: Place[]) => this.searchHistoryPlaces = places);
    // Auto refresh Weather Data
    this.starTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
    this.searchHistoryPlaces$.unsubscribe();
  }

  starTimer() {
    this.sendWeatherTick();
    this.autoWeatherLoader = setInterval(() => {
      this.sendWeatherTick()
    }, 60000);
  }

  stopTimer() {
    clearInterval(this.autoWeatherLoader);
  }

  sendWeatherTick() {
    for (let place of this.searchHistoryPlaces) {
      this.getPlaceInfo(place);
    }
  }

  // TODO: Create custom action for this task
  private getPlaceInfo(place: Place) {
    const coordinates: ICoordinates = {
      lat: place.geometry.coordinates[1],
      lon: place.geometry.coordinates[0]
    };
    this.openWeatherService
      .getWeatherByCords(coordinates)
      .pipe(
        tap(weatherData => {
          this.store.dispatch(new WeatherUpdatePlace({place: place, weather: weatherData}));
        })
      )
      .subscribe();
  }
}
