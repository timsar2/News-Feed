import { createSelector } from "@ngrx/store";
import { selectAuthState } from "../core.state";
import { AuthState } from "./auth.models";

export const selectAuth = createSelector(
    selectAuthState,
    (state: AuthState) => state
);

export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (state: AuthState) => state.authInfo.isAuthenticated
);

export const selectLoginInfo = createSelector(
    selectAuthState,
    (state: AuthState) => state.authInfo.loginInfo
);

export const selectAccessToken = createSelector(
    selectAuthState,
    (state: AuthState) => state.authInfo.token
);