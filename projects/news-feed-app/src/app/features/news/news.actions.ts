import { Action } from '@ngrx/store';
import { News, NewsFeed } from './news.model';

export enum NewsActionType {
    LOAD_NEWS                   = '[NEWS] Load News',
    LOAD_NEWS_SUCCESS           = '[NEWS] Load News Success',
    LOAD_NEWS_FEED              = '[NEWS] Load NewsFeed',
    LOAD_NEWS_FEED_SUCCESS      = '[NEWS] Load NewsFeed Success',
    LOAD_NEWS_BY_USER           = '[NEWS] Load By User',
    CREATE_NEWS                 = '[NEWS] Create News',
    CREATE_NEWS_SUCCESS         = '[NEWS] Create News Success'
}

export class NewsLoadAction implements Action {
    readonly type = NewsActionType.LOAD_NEWS
}

export class NewsLoadSuccessAction implements Action {
    readonly type = NewsActionType.LOAD_NEWS_SUCCESS;

    constructor(public payload: News[]) {}
}

export class NewsFeedLoadAction implements Action {
    readonly type = NewsActionType.LOAD_NEWS_FEED
}

export class NewsFeedLoadSuccessAction implements Action {
    readonly type = NewsActionType.LOAD_NEWS_FEED_SUCCESS

    constructor(public payload: NewsFeed[]) {}
}

export class NewsCreateAction implements Action {
    readonly type = NewsActionType.CREATE_NEWS

    constructor(public payload: News) {}
}

export class NewsCreateActionSuccess implements Action {
    readonly type = NewsActionType.CREATE_NEWS_SUCCESS

    constructor(public payload: News) {}
}

export type NewsAction 
= NewsLoadAction 
| NewsLoadSuccessAction
| NewsFeedLoadAction
| NewsFeedLoadSuccessAction
| NewsCreateAction
| NewsCreateActionSuccess