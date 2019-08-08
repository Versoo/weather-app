import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {HistoryRemovePlace} from "../../store";
import {AppState} from "../../../store";
import {Place} from "../../models";

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
