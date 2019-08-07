import { TestBed } from '@angular/core/testing';

import { MapboxPlacesService } from './mapbox-places.service';

describe('MapboxPlacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapboxPlacesService = TestBed.get(MapboxPlacesService);
    expect(service).toBeTruthy();
  });
});
