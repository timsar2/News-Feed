import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";

import { NewsActionType, NewsCreateAction, NewsCreateActionSuccess, NewsFeedLoadAction, NewsFeedLoadSuccessAction, NewsLoadAction, NewsLoadSuccessAction } from "./news.actions";
import { NewsApiClient } from './newsApiClient';


@Injectable()
export class NewsEffects {

    constructor(
        private actions$: Actions,
        private newsApiClient: NewsApiClient
    ) {}

    /**
     * Load News effect
     */
    loadNews$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<NewsLoadAction>(NewsActionType.LOAD_NEWS),
            mergeMap(
            () =>  this.newsApiClient.loadNews()
                .pipe(
                map(res => new NewsLoadSuccessAction(res)
                ),
                // catchError(error => of(new LoadUsersActionFail(error)))
                )
            ),
        )
    });

    /**
     * Load News-Feed effect
     */
    loadNewsFeed$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<NewsFeedLoadAction>(NewsActionType.LOAD_NEWS_FEED),
            mergeMap(
            () =>  this.newsApiClient.loadNewsFeed()
                .pipe(
                map(res => new NewsFeedLoadSuccessAction(res)
                ),
                // catchError(error => of(new LoadUsersActionFail(error)))
                )
            ),
        )
    });

    /**
     * Create News effect
    */
    createNews$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<NewsCreateAction>(NewsActionType.CREATE_NEWS),
            mergeMap(
            (data) =>  {debugger; return this.newsApiClient.createNews(data.payload)
                .pipe(
                map(res => new NewsCreateActionSuccess(res)
                ),
                // catchError(error => of(new LoadUsersActionFail(error)))
                )}
            ),
        )
    });
}