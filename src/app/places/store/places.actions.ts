import {Action} from "@ngrx/store";
import {MapboxFeature} from "../services";
import {Place} from "../models";

export const AUTOCOMPLETE_TYPING = '[Places] Autocomplete start typing';
export const AUTOCOMPLETE_ADD_PLACE = '[Places] Autocomplete add search place';
export const AUTOCOMPLETE_ADD_PLACES = '[Places] Autocomplete add search places';
export const AUTOCOMPLETE_SELECT_PLACE = '[Places] Autocomplete select place';
export const AUTOCOMPLETE_FAIL = '[Places] Autocomplete fail';

export const HISTORY_ADD_PLACE = '[Places] History add place';
export const HISTORY_REMOVE_PLACE = '[Places] History remove place';
export const HISTORY_CLEAR_PLACES = '[Places] History clear places';

export const FAVORITES_ADD_PLACE = '[Places] Add favorite place';
export const FAVORITES_REMOVE_PLACE = '[Places] Remove favorite place';

export const WEATHER_AUTO_TICK = '[Places] Interval weather auto tick';
export const WEATHER_UPDATE_PLACE = '[Places] Update place with weather data';

export const SELECT_CURRENT_PLACE = '[Places] Select current place';

export class AutocompleteTyping implements Action {
  readonly type = AUTOCOMPLETE_TYPING;

  constructor(public payload: string) {
  }
}

export class AutocompleteAddPlace implements Action {
  readonly type = AUTOCOMPLETE_ADD_PLACE;

  constructor(public payload: MapboxFeature) {
  }
}

export class AutocompleteAddPlaces implements Action {
  readonly type = AUTOCOMPLETE_ADD_PLACES;

  constructor(public payload: MapboxFeature[]) {
  }
}

export class AutocompleteSelectPlace implements Action {
  readonly type = AUTOCOMPLETE_SELECT_PLACE;

  constructor(public payload: MapboxFeature) {
  }
}

export class AutocompleteFail implements Action {
  readonly type = AUTOCOMPLETE_FAIL;
}

export class HistoryAddPlace implements Action {
  readonly type = HISTORY_ADD_PLACE;

  constructor(public payload: Place) {

  }
}

export class HistoryClearPlaces implements Action {
  readonly type = HISTORY_CLEAR_PLACES;
}

export class HistoryRemovePlace implements Action {
  readonly type = HISTORY_REMOVE_PLACE;

  constructor(public payload: Place) {

  }
}

export class FavoritesAddPlace implements Action {
  readonly type = FAVORITES_ADD_PLACE;

  constructor(public payload: string) {

  }
}

export class FavoritesRemovePlace implements Action {
  readonly type = FAVORITES_REMOVE_PLACE;

  constructor(public payload: string) {

  }
}

export class WeatherAutoTick implements Action {
  readonly type = WEATHER_AUTO_TICK;
  constructor(public payload: Place) {

  }
}

export class WeatherUpdatePlace implements Action {
  readonly type = WEATHER_UPDATE_PLACE;

  constructor(public payload: { place: Place, weather: {} }) {

  }
}

export class SelectCurrentPlace implements Action {
  readonly type = SELECT_CURRENT_PLACE;

  constructor(public payload: string) {

  }
}

export type PlacesActions =
  AutocompleteTyping
  | AutocompleteAddPlace
  | AutocompleteAddPlaces
  | AutocompleteFail
  | AutocompleteSelectPlace
  | HistoryAddPlace
  | HistoryClearPlaces
  | HistoryRemovePlace
  | FavoritesAddPlace
  | FavoritesRemovePlace
  | WeatherAutoTick
  | WeatherUpdatePlace
  | SelectCurrentPlace;

