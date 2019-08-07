import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-favorite-place-icon-button',
  templateUrl: './favorite-place-icon-button.component.html',
  styleUrls: ['./favorite-place-icon-button.component.scss']
})
export class FavoritePlaceIconButtonComponent implements OnInit {
  @Input() favorite: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  get icon() {
    return (this.favorite) ? 'star' : 'star_border';
  }
}
