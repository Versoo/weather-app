import {Component, Input, OnInit} from '@angular/core';
import {Place} from "../../../places/models/place.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {SelectCurrentPlace} from "../../../places/store/places.actions";

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  @Input() places: Place[];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  selectPlace(place: Place) {
    this.store.dispatch(new SelectCurrentPlace(place.id));
  }

}
