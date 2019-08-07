import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {LayoutSate} from "../../store/layout.reducer";
import {tap} from "rxjs/internal/operators/tap";
import {takeWhile} from "rxjs/operators";
import {CloseSidebarNav, OpenSidebarNav} from "../../store/layout.actions";

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
    this.store.select('layout')
      .pipe(
        takeWhile(() => this.subscribeLayout),
        tap((layout: LayoutSate) => {
          this.sidebarOpen = layout.sidebarOpen;
        })
      ).subscribe()
  }

  ngOnDestroy(): void {
    // Different form to unsubscribe stream
    this.subscribeLayout = false;
  }

  toggleSidebar() {
    (!this.sidebarOpen) ? this.store.dispatch(new OpenSidebarNav()) : this.store.dispatch(new CloseSidebarNav());
  }

}
