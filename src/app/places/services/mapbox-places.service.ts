import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {MapboxAutocompleteResponse, MapboxFeature} from "./mapbox-places.interface";
import {BaseApiService} from "../../shared/services/base-api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MapboxPlacesService extends BaseApiService {
  protected API_BASE_URI: string = environment.mapboxApiURI;
  protected API_ACCESS_TOKEN: string = environment.mapboxAccessToken;
  protected DEFAULT_PARAMS = {
    access_token: this.API_ACCESS_TOKEN,
    language: 'pl',
  };

  constructor(private httpClient: HttpClient) {
    super()
  }

  autocompletePlaces(queryString: string, customParams?: {}): Observable<MapboxFeature[]> {
    const autocompleteParams = {
      autocomplete: true,
      types: 'place',
      limit: 5,
    };
    const queryParams = {...autocompleteParams, ...customParams};
    const endpoint = this.getEndpointURI(`geocoding/v5/mapbox.places/${queryString}.json`, queryParams);

    return this.httpClient
      .get(endpoint)
      .pipe(
        map((response: MapboxAutocompleteResponse) => response.features)
      );
  }

  private getEndpointURI(endpoint: string, params?: {}): string {
    const queryString = this.generateQueryString(params);
    return `${this.API_BASE_URI}/${endpoint}?${queryString}`;
  }
}
