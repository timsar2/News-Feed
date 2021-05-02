import { Action } from '@ngrx/store';

export enum NewsFeedActionType {
    LOAD_NEWS_FEED = '[NEWS] Load NewsFeed',
    LOAD_NEWS_BY_USER = '[NEWS] Load By User'
}

export class LoadNewsFeedAction implements Action {
    readonly type = NewsFeedActionType.LOAD_NEWS_FEED
}

export class LoadNewsByUserAction implements Action {
    readonly type = NewsFeedActionType.LOAD_NEWS_BY_USER;
    constructor(private payload: string) {}
}

export type NewsAction = LoadNewsFeedAction | LoadNewsByUserAction