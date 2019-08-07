import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePlacesListComponent } from './favorite-places-list.component';

describe('FavoritePlacesListComponent', () => {
  let component: FavoritePlacesListComponent;
  let fixture: ComponentFixture<FavoritePlacesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePlacesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePlacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
