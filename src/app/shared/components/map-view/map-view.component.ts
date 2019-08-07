import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Place} from "../../../places/models/place.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {SelectCurrentPlace} from "../../../places/store/places.actions";
import {PlacesState} from "../../../places/store/places.reducer";
import {tap} from "rxjs/internal/operators/tap";
import {takeWhile} from "rxjs/operators";

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit, OnDestroy {
  @Input() places: Place[];
  subscribeStore: boolean = true;
  selectedPlaceId: string;
  currentPlace: Place;


  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('places').pipe(
      takeWhile(() => this.subscribeStore),
      tap((state: PlacesState) => {
        this.selectedPlaceId = state.selected
        this.currentPlace = this.getSelectedPlace(state);
      })
    ).subscribe();


  }

  ngOnDestroy(): void {
    this.subscribeStore = false;
  }

  selectPlace(place: Place) {
    this.store.dispatch(new SelectCurrentPlace(place.id));
  }

  showDetails() {
    return (this.currentPlace && this.currentPlace.weather);
  }

  private getSelectedPlace(state: PlacesState) {
    let current = state.history.find((place: Place) => place.id === state.selected);
    return (current) ? current : null;
  }
}
