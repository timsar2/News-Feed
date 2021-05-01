import { ActionReducer, ActionReducerMap, combineReducers, compose, createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../core/core.state";
import { News, NewsState } from "../../features/news/news.model";
import { UserInfo, UserState } from "../../features/users/user.mode";
import { NewsReducer, NEWS_KEY } from "./reducers/news.reducer";
import { UserReducer } from './reducers/user.reducer';

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


export const selectedUser = (state: FeatureState) => state.users.selectedUser;
export const selectAllNews = (state: FeatureState) => state.news.newsList;

export const selectAllUser = createSelector(
    selectFeature,
    (state: FeatureState) => state.users.userList
);

export const selectNewsbyUser = createSelector(
    selectedUser,
    selectAllNews,
    (selectedUser: UserInfo, allNews: News[]) => {
        if (selectedUser && allNews) {
            return allNews.filter((news: News) => news.createdBy === selectedUser.id);
        } else {
            return allNews;
        }
    }
);




