export interface PlaceInterface {
  id: string;
  text: string;
  place_name: string;
  favorite: boolean;
  geometry: {
    type: string;
    coordinates: number[];
  };
}
