import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {FavoritesAddPlace, FavoritesRemovePlace, SelectCurrentPlace} from "../../store";
import {AppState} from "../../../store";
import {Place} from "../../models";

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.scss']
})
export class PlaceCardComponent implements OnInit {
  @Input() place: Place;

  @HostListener('click') onClick() {
    this.store.dispatch(new SelectCurrentPlace(this.place.id));
  }

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  onChangeFavoriteState(place: Place) {
    if (!place.favorite) {
      this.store.dispatch(new FavoritesAddPlace(place.id));
    } else {
      this.store.dispatch(new FavoritesRemovePlace(place.id));
    }
  }
}
