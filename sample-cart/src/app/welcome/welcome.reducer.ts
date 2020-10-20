import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { increment } from "./welcome.actions";

export const initialState = 0;
const _welcomeReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1)
);

export function welcomeReducer(state, action) {
  return _welcomeReducer(state, action);
}
