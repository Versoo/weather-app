import {Component, Input, OnInit} from '@angular/core';
import {Place} from "../../models/place.model";

@Component({
  selector: 'app-favorite-places-list',
  templateUrl: './favorite-places-list.component.html',
  styleUrls: ['./favorite-places-list.component.scss']
})
export class FavoritePlacesListComponent implements OnInit {
  @Input() favorites: Place[];

  constructor() {
  }

  ngOnInit() {

  }
}
