import {Injectable} from '@angular/core';
import {PlacesEffects} from "../places/store";

@Injectable()
export class AppEffects {
}

export const AppStateEffects = [
  AppEffects,
  PlacesEffects
];
