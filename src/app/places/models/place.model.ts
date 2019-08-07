import {PlaceInterface} from "./place.interface";

export class Place implements PlaceInterface {
  id: string;
  text: string;
  place_name: string;
  favorite: boolean;
  geometry: {
    type: string;
    coordinates: number[];
  };


  constructor(args: Partial<PlaceInterface>) {
    this.id = args.id || '';
    this.text = args.text || '';
    this.place_name = args.place_name || '';
    this.favorite = args.favorite || false;
    this.geometry = {type: null, coordinates: null, ...args.geometry};
  }
}
