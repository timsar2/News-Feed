import { Action } from '@ngrx/store';

export enum NewsFeedActionType {
    LOAD_NEWS_FEED = '[NEWS_FEED] Load NewsFeed'
}

export class LoadNewsFeedAction implements Action {
    readonly type = NewsFeedActionType.LOAD_NEWS_FEED
}

export type NewsAction = LoadNewsFeedAction