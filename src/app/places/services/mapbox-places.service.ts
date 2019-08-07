import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {MapboxAutocompleteResponse, MapboxFeature} from "./mapbox-places.interface";

@Injectable({
  providedIn: 'root'
})
export class MapboxPlacesService {
  private API_BASE_URI: string = environment.mapboxApiURI;
  private API_ACCESS_TOKEN: string = environment.mapboxAccessToken;
  private DEFAULT_PARAMS = {
    access_token: this.API_ACCESS_TOKEN,
    language: 'pl',
  };

  constructor(private httpClient: HttpClient) {

  }

  autocompletePlaces(queryString: string, customParams?: {}) {
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

  private getEndpointURI(endpoint: string, params?: {}) {
    const queryString = this.generateQueryString(params);
    return `${this.API_BASE_URI}/${endpoint}?${queryString}`;
  }

  private generateQueryString(params: {}) {
    const data = {...this.DEFAULT_PARAMS, ...params};
    return Object.keys(data).map(key => key + '=' + data[key]).join('&');
  }
}
