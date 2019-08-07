import {ActionReducerMap} from '@ngrx/store';
import {placesReducer, PlacesState} from "../places/store/places.reducer";
import {layoutReducer, LayoutSate} from "../shared/store/layout.reducer";

export interface AppState {
  places: PlacesState;
  layout: LayoutSate;
}

export const appReducers: ActionReducerMap<AppState> = {
  places: placesReducer,
  layout: layoutReducer
};
