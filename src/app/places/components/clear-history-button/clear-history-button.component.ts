import {Component, HostListener, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {HistoryClearPlaces} from "../../store";
import {AppState} from "../../../store";

@Component({
  selector: 'app-clear-history-button',
  templateUrl: './clear-history-button.component.html',
  styleUrls: ['./clear-history-button.component.scss']
})
export class ClearHistoryButtonComponent implements OnInit {
  @HostListener('click') onClick() {
    this.clearHistory();
  }

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  private clearHistory() {
    this.store.dispatch(new HistoryClearPlaces());
  }
}
