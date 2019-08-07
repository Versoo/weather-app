export interface PlaceInterface {
  id: string;
  text: string;
  place_name: string;
  favorite: boolean;
  geometry: {
    type: string;
    coordinates: number[];
  };
  weather?: PlaceWeatherData
}

export interface PlaceWeatherData {
  description: string;
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}
