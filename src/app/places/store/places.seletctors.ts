import {PlacesState} from "./places.reducer";
import {createSelector} from "@ngrx/store";
import {AppState} from "../../store/app.reducer";

export const getPlacesState = (state: AppState) => state.places;

export const getPlacesAutocomplete = createSelector(getPlacesState, (state: PlacesState) => state.autocomplete);

export const getPlacesHistory = createSelector(getPlacesState, (state: PlacesState) => state.history);

export const getFavoritePlacesIds = createSelector(getPlacesState, (state: PlacesState) => state.favorites);
export const getFavoritePlaces = createSelector(getPlacesHistory, getFavoritePlacesIds, (places, favoritesIds) => {
  return places.filter(place => favoritesIds.some(item => item === place.id));
});

export const getSelectedPlaceID = createSelector(getPlacesState, (state: PlacesState) => state.selected);
export const getSelectedPlace = createSelector(getPlacesHistory, getSelectedPlaceID, (places, selectedId) => {
  return places.find(place => place.id === selectedId);
});
