import { Action } from '@ngrx/store';
import { AuthInfo } from './auth.models';

export enum AuthActionType {
    AUTH_LOGIN = '[AUTH] Auth Login',
    AUTH_LOGOUT = '[AUTH] Auth Logout'
}

export class AuthLogin implements Action {
    readonly type = AuthActionType.AUTH_LOGIN
    constructor(public payload: AuthInfo) {}
}

export class AuthLogout implements Action {
    readonly type = AuthActionType.AUTH_LOGOUT
}

export type AuthAction = AuthLogin | AuthLogout
