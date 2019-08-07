import {CLOSE_SIDEBAR_NAV, LayoutActions, OPEN_SIDEBAR_NAV} from "./layout.actions";

export interface LayoutSate {
  sidebarOpen: boolean
}

const initialPlacesState: LayoutSate = {
  sidebarOpen: true
};

export function layoutReducer(state: LayoutSate = initialPlacesState, action: LayoutActions): LayoutSate {
  switch (action.type) {
    case OPEN_SIDEBAR_NAV:
      return {
        ...state,
        sidebarOpen: true
      };
    case CLOSE_SIDEBAR_NAV:
      return {
        ...state,
        sidebarOpen: false
      };
    default:
      return state;
  }
}
