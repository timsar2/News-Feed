import { Action } from '@ngrx/store';
import { News } from './news.model';

export enum NewsActionType {
    LOAD_NEWS = '[NEWS] Load News',
    LOAD_NEWS_FEED = '[NEWS] Load NewsFeed',
    LOAD_NEWS_BY_USER = '[NEWS] Load By User',
    CREATE_NEWS = '[NEWS] Create News',
    CREATE_NEWS_SUCCESS = '[NEWS] Create News Success'
}

export class NewsLoadAction implements Action {
    readonly type = NewsActionType.LOAD_NEWS
}

export class NewsFeedLoadAction implements Action {
    readonly type = NewsActionType.LOAD_NEWS_FEED
}

export class NewsActionCreate implements Action {
    readonly type = NewsActionType.CREATE_NEWS

    constructor(public payload: News) {}
}

export class NewsActionCreateSuccess implements Action {
    readonly type = NewsActionType.CREATE_NEWS_SUCCESS

    constructor(public payload: News) {}
}

export type NewsAction 
= NewsLoadAction 
| NewsFeedLoadAction
| NewsActionCreate
| NewsActionCreateSuccess