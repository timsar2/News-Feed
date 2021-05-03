import { Action } from '@ngrx/store';

export enum NewsActionType {
    LOAD_NEWS = '[NEWS] Load News',
    LOAD_NEWS_FEED = '[NEWS] Load NewsFeed',
    LOAD_NEWS_BY_USER = '[NEWS] Load By User'
}

export class LoadNews implements Action {
    readonly type = NewsActionType.LOAD_NEWS
}

export class LoadNewsFeedAction implements Action {
    readonly type = NewsActionType.LOAD_NEWS_FEED
}

export type NewsAction = LoadNews | LoadNewsFeedAction