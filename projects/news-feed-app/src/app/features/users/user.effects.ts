import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { LoadUsersAction, LoadUsersActionSuccess, UserActionType } from "./user.actions";
import { UserApiClient } from './userApiClient';


@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userApiClient: UserApiClient
    ) {}

    /**
     * Load Users effect
     */
    loadUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<LoadUsersAction>(UserActionType.LOAD_USERS),
            mergeMap(
            () =>  this.userApiClient.loadUsers()
                .pipe(
                map(res => new LoadUsersActionSuccess(res)
                ),
                // catchError(error => of(new LoadUsersActionFail(error)))
                )
            ),
        )
    });
}