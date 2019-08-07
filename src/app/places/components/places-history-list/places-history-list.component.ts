import {Component, Input, OnInit} from '@angular/core';
import {Place} from "../../models/place.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {HistoryRemovePlace} from "../../store/places.actions";

@Component({
  selector: 'app-places-history-list',
  templateUrl: './places-history-list.component.html',
  styleUrls: ['./places-history-list.component.scss']
})
export class PlacesHistoryListComponent implements OnInit {
  @Input() historyPlaces: Place[];
  @Input() showItems: number = null;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  removeItem(place: Place){
    this.store.dispatch(new HistoryRemovePlace(place));
  }
}
