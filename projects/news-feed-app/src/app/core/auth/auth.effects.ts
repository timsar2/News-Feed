import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType  } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { AuthApiClient } from "./authApiClient.service";
import { AppState } from './../core.state';
import { Observable, of } from "rxjs";
import { AuthActionType, DoLoginAction, DoLoginFailAction, DoLoginSuccessAction } from "./auth.actions";
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
            (data) => this.authApiClient.logging(data.payload)
                .pipe(
                map(res => {
                    return new DoLoginSuccessAction(res)
                }),
                catchError(error => of(new DoLoginFailAction(error)))
                )
            ),
        )
    });
    
}
