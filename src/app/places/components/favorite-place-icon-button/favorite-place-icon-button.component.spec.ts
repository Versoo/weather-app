import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePlaceIconButtonComponent } from './favorite-place-icon-button.component';

describe('FavoritePlaceIconButtonComponent', () => {
  let component: FavoritePlaceIconButtonComponent;
  let fixture: ComponentFixture<FavoritePlaceIconButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePlaceIconButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePlaceIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
