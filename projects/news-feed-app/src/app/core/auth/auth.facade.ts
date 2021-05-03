import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { AppState } from "../core.state";
import { selectIsAuthenticated, selectLoginInfo } from "./auth.selectors";
import { AuthInfo } from './auth.models';
import { DoLoginAction } from "./auth.actions";

@Injectable()
export class AuthFacade {
    public isAuthenticated$ = this.appState$.pipe(select(selectIsAuthenticated));
    public loginInfo$ = this.appState$.pipe(select(selectLoginInfo));

    constructor(private appState$: Store<AppState>) {}

    login(userName: string) {
        this.appState$.dispatch(new DoLoginAction(userName));
    }
}