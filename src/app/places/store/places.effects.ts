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
} from "./places.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {MapboxFeature, MapboxPlacesService} from "../services";
import {of} from "rxjs/internal/observable/of";
import {Place} from "../models/place.model";
import {AppState} from "../../store/app.reducer";
import {Store} from "@ngrx/store";

@Injectable()
export class PlacesEffects {
  constructor(public actions$: Actions, private store: Store<AppState>, private mapboxPlacesService: MapboxPlacesService) {
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
  historyAddPlace = this.actions$.pipe(
    ofType(HISTORY_ADD_PLACE),
    switchMap((selectedPlace: HistoryAddPlace) => {
      return of(new SelectCurrentPlace(selectedPlace.payload));
    })
  );
}
