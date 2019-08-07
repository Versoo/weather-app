import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICoordinates} from "./coordinates.interface";
import {ActualWeatherResponse} from "./actual-weather-response";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {PlaceWeatherData} from "../models/place.interface";

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  private API_URI: string = environment.openweatermap_api_url;
  private API_KEY: string = environment.openweatermap_api_key;

  constructor(private httpClient: HttpClient) {
  }

  getWeatherByCords(coordinates: ICoordinates): Observable<PlaceWeatherData> {
    return this.httpClient.get<ActualWeatherResponse>(this.endpointURI('weather', coordinates))
      .pipe(map((response: ActualWeatherResponse) => {
        return {
          description: response.weather[0].description,
          ...response.main,
        }
      }));
  }

  private endpointURI(name: string, params: {} = {}): string {
    const queryParams = this.getQueryString(params);
    return `${this.API_URI}/${name}?appid=${this.API_KEY}&lang=pl&units=metric&${queryParams}`;
  }

  private getQueryString(params: {}): string {
    const data = params || {};
    return Object.keys(data).map(key => key + '=' + data[key]).join('&');
  }
}
