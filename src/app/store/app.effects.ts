import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {PlacesEffects} from "../places/store/places.effects";


@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {
  }
}


export const AppStateEffects = [
  AppEffects,
  PlacesEffects
];
