import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType  } from "@ngrx/effects";
import { AuthApiClient } from "./authApiClient.service";
import { of } from "rxjs";
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
            (data) =>  this.authApiClient.logging(data.payload)
                .pipe(
            map(res => {
                res.isAuthenticated = true;                 //* set true of authorization status of current user
                return new DoLoginSuccessAction(res)
            }),
                catchError(error => of(new DoLoginFailAction(error)))
                )
            ),
        )
    });
    
}
