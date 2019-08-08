import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {tap} from "rxjs/internal/operators/tap";
import {takeWhile} from "rxjs/operators";
import {pipe} from "rxjs";
import {CloseSidebarNav, getSidebarOpen, OpenSidebarNav} from "../../store";
import {AppState} from "../../../store";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscribeLayout: boolean = true;
  private sidebarOpen: boolean;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(pipe(getSidebarOpen))
      .pipe(
        takeWhile(() => this.subscribeLayout),
        tap((status: boolean) => this.sidebarOpen = status)
      ).subscribe();
  }

  ngOnDestroy(): void {
    // Different form to unsubscribe stream
    this.subscribeLayout = false;
  }

  toggleSidebar() {
    (!this.sidebarOpen) ? this.store.dispatch(new OpenSidebarNav()) : this.store.dispatch(new CloseSidebarNav());
  }

}
