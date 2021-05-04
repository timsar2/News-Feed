import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType  } from "@ngrx/effects";
import { AuthApiClient } from "./authApiClient.service";
import { of } from "rxjs";
import { AuthActionType, DoLikeAction, DoLikeSuccessAction, DoLoginAction, DoLoginFailAction, DoLoginSuccessAction, RemoveLikeAction } from "./auth.actions";
import { catchError, map, mergeMap } from "rxjs/operators";

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authApiClient: AuthApiClient
    ) {}

    /**
     * Login effect
     */
    doLogin$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<DoLoginAction>(AuthActionType.DO_LOGIN),
            mergeMap(
            (data) =>  this.authApiClient.doLogging(data.payload)
                .pipe(
                map(res =>  {
                    res.isAuthenticated = true;                 //* set true of authorization status of current user
                    return new DoLoginSuccessAction(res)
                }),
                // catchError(error => of(new DoUserLikeFailAction(error)))
                )
            ),
        )
    });

    /**
     * Like a news
     */
    doLikeNews$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<DoLikeAction>(AuthActionType.DO_LIKEED),
            mergeMap(
            (data) =>  this.authApiClient.doLikeNews(data.payload)
                .pipe(
                map(res => {
                    if(res.newsId != '0'){
                        return new DoLikeSuccessAction(res.newsId)
                    }else{
                        return new RemoveLikeAction(data.payload)
                    }                    
                }),
                // catchError()
                )
            ),
        )
    });
    
}
