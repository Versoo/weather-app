import {Action} from "@ngrx/store";

export const OPEN_SIDEBAR_NAV = '[Layout] Open sidebar nav';
export const CLOSE_SIDEBAR_NAV = '[Layout] Close sidebar nav';

export class OpenSidebarNav implements Action {
  readonly type = OPEN_SIDEBAR_NAV;
}

export class CloseSidebarNav implements Action {
  readonly type = CLOSE_SIDEBAR_NAV;
}

export type LayoutActions = OpenSidebarNav | CloseSidebarNav;
