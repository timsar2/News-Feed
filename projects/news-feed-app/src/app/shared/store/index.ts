import {  ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../core/core.state";
import { News, NewsState } from "../../features/news/news.model";
import { NewsReducer } from "../../features/news/news.reducer";
import {  UserState } from "../../features/users/user.mode";
import { UserReducer } from "../../features/users/user.reducer";

export const FEATURE_NAME = 'feature';
export const selectFeature = createFeatureSelector<State, FeatureState>(
    FEATURE_NAME
);

export interface FeatureState {
    news:       NewsState;
    users:      UserState;
}

export const reducers: ActionReducerMap<FeatureState, any /* put any here */> = {
    news: NewsReducer,
    users: UserReducer
};

export interface State extends AppState {
    feature: FeatureState;
}

export const selectNewsFeed = createSelector(
    selectFeature,
    (state: FeatureState) => state.news.newsFeed
);




