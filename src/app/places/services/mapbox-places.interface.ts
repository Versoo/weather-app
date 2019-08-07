export interface MapboxAutocompleteResponse {
  type: string;
  query: string[];
  features: MapboxFeature[];
}

export interface MapboxFeature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: {};
  text_pl: string;
  language_pl: string;
  place_name_pl: string;
  text: string;
  language: string;
  place_name: string;
  matching_text: string;
  matching_place_name: string;
  bbox: number[];
  center: number[];
  geometry: {
    type: string;
    coordinates: number[];
  };
  context: MapboxContext[];
}

export interface MapboxContext {
  id: string;
  short_code: string;
  wikidata: string;
  text_pl: string;
  language_pl: string;
  text: string;
  language: string;
}
