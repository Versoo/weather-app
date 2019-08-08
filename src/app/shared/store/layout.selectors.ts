import {createSelector} from "@ngrx/store";
import {LayoutSate} from "./layout.reducer";
import {AppState} from "../../store";

export const getLayoutState = (state: AppState) => state.layout;
export const getSidebarOpen = createSelector(getLayoutState, (state: LayoutSate) => state.sidebarOpen);
