import {AppState} from "../../store/app.reducer";
import {createSelector} from "@ngrx/store";
import {LayoutSate} from "./layout.reducer";

export const getLayoutState = (state: AppState) => state.layout;
export const getSidebarOpen = createSelector(getLayoutState, (state: LayoutSate) => state.sidebarOpen);
