import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceWeatherDetailsComponent } from './place-weather-details.component';

describe('PlaceWeatherDetailsComponent', () => {
  let component: PlaceWeatherDetailsComponent;
  let fixture: ComponentFixture<PlaceWeatherDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceWeatherDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceWeatherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
