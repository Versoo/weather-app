import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesHistoryListComponent } from './places-history-list.component';

describe('PlacesHistoryListComponent', () => {
  let component: PlacesHistoryListComponent;
  let fixture: ComponentFixture<PlacesHistoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesHistoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
