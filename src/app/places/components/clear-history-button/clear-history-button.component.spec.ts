import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearHistoryButtonComponent } from './clear-history-button.component';

describe('ClearHistoryButtonComponent', () => {
  let component: ClearHistoryButtonComponent;
  let fixture: ComponentFixture<ClearHistoryButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearHistoryButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearHistoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
