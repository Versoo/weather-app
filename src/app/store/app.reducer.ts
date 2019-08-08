import {ActionReducerMap} from '@ngrx/store';
import {layoutReducer, LayoutSate} from "../shared/store";
import {placesReducer, PlacesState} from "../places/store";

export interface AppState {
  places: PlacesState;
  layout: LayoutSate;
}

export const appReducers: ActionReducerMap<AppState> = {
  places: placesReducer,
  layout: layoutReducer
};
