import {Component, Input, OnInit} from '@angular/core';
import {Place} from "../../models/place.model";

@Component({
  selector: 'app-place-weather-details',
  templateUrl: './place-weather-details.component.html',
  styleUrls: ['./place-weather-details.component.scss']
})
export class PlaceWeatherDetailsComponent implements OnInit {
  @Input() place: Place;

  constructor() { }

  ngOnInit() {
  }

}
