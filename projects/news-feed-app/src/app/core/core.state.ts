import { ActionReducerMap, combineReducers, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth/auth.models';
import { AuthReducer } from './auth/auth.reducer';

export const coreReducers: ActionReducerMap<AppState, any /* put any here */> = {
    auth : AuthReducer
};

export const selectAuthState = createFeatureSelector<AppState, AuthState>(
    'auth'
);

export interface AppState {
    auth: AuthState
}