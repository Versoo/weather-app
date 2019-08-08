import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICoordinates} from "./coordinates.interface";
import {ActualWeatherResponse} from "./actual-weather-response";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {PlaceWeatherData} from "../models";
import {BaseApiService} from "../../shared/services/base-api.service";

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService extends BaseApiService {
  protected API_BASE_URI: string = environment.openweatermap_api_url;
  protected API_ACCESS_TOKEN: string = environment.openweatermap_api_key;
  protected DEFAULT_PARAMS = {
    appid: this.API_ACCESS_TOKEN,
    lang: 'pl',
    units: 'metric'
  };

  constructor(private httpClient: HttpClient) {
    super();
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
    const queryParams = this.generateQueryString(params);
    return `${this.API_BASE_URI}/${name}?${queryParams}`;
  }
}
