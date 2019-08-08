import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {
  AUTOCOMPLETE_SELECT_PLACE,
  AUTOCOMPLETE_TYPING,
  AutocompleteAddPlaces,
  AutocompleteFail,
  AutocompleteSelectPlace,
  AutocompleteTyping,
  HISTORY_ADD_PLACE,
  HistoryAddPlace,
  SelectCurrentPlace,
  WeatherUpdatePlace,
} from "./places.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {ICoordinates, MapboxFeature, MapboxPlacesService, OpenWeatherService} from "../services";
import {of} from "rxjs/internal/observable/of";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {Place} from "../models";

@Injectable()
export class PlacesEffects {
  constructor(public actions$: Actions, private store: Store<AppState>, private mapboxPlacesService: MapboxPlacesService, private openWeatherService: OpenWeatherService) {
  }

  @Effect()
  autocompleteTyping = this.actions$.pipe(
    ofType(AUTOCOMPLETE_TYPING),
    switchMap((autocompleteTypingData: AutocompleteTyping) => {
      return this.mapboxPlacesService
        .autocompletePlaces(autocompleteTypingData.payload)
        .pipe(
          map((placesData: MapboxFeature[]) => {
            return new AutocompleteAddPlaces(placesData);
          }),
          catchError(errorRes => of(new AutocompleteFail())),
        );
    })
  );

  @Effect()
  autocompleteSelectPlace = this.actions$.pipe(
    ofType(AUTOCOMPLETE_SELECT_PLACE),
    switchMap((selectedPlace: AutocompleteSelectPlace) => {
      const place = new Place(selectedPlace.payload);
      return of(new HistoryAddPlace(place));
    }),
  );

  @Effect()
  weatherDataAttach = this.actions$.pipe(
    ofType(HISTORY_ADD_PLACE),
    switchMap((selectedPlace: HistoryAddPlace) => {
      const place = selectedPlace.payload;
      const coordinates: ICoordinates = {
        lat: place.geometry.coordinates[1],
        lon: place.geometry.coordinates[0]
      };
      return this.openWeatherService
        .getWeatherByCords(coordinates)
        .pipe(map(weatherData => {
          return new WeatherUpdatePlace({place: place, weather: weatherData});
        }));
    })
  );


  @Effect()
  historyAddPlace = this.actions$.pipe(
    ofType(HISTORY_ADD_PLACE),
    switchMap((selectedPlace: HistoryAddPlace) => {
      return of(new SelectCurrentPlace(selectedPlace.payload.id));
    })
  );
}
