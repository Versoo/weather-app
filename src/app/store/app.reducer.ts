import {ActionReducerMap} from '@ngrx/store';
import {placesReducer, PlacesState} from "../places/store/places.reducer";

export interface AppState {
  places: PlacesState
}

export const appReducers: ActionReducerMap<AppState> = {
  places: placesReducer,
};
