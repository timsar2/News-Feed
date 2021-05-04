import { Action } from '@ngrx/store';
import { AuthInfo } from './auth.models';

export enum AuthActionType {
    DO_LOGIN            = '[Auth] Do Login',
    DO_LOGIN_SUCCESS    = '[Auth] Do Login Success',
    DO_LOGIN_FAIL       = '[Auth] Do Login Fail',
    DO_LOGOUT           = '[Auth] Do Logout',
    DO_LOGOUT_SUCCESS   = '[Auth] Do Logout Success',
    DO_LOGOUT_FAIL      = '[Auth] Do Logout Fail',
    DO_LIKEED           = '[Auth] Liked News',
    DO_LIKEED_SUCCESS   = '[Auth] Liked News SUCCESS',
    REMOVE_LIKEED       = '[AUTH] Remove Like'
}

export class DoLoginAction implements Action {
    readonly type = AuthActionType.DO_LOGIN
    constructor(public payload: string) {}
}

export class DoLoginSuccessAction implements Action {
    type = AuthActionType.DO_LOGIN_SUCCESS;

    constructor(public payload: AuthInfo) { }
}

export class DoLoginFailAction implements Action {
    readonly type = AuthActionType.DO_LOGIN_FAIL
    constructor(public payload: Error) {}
}

/**
 * Logout Actions
 */
export class DoLogoutAction implements Action {
    readonly type = AuthActionType.DO_LOGOUT
}

export class DoLikeAction implements Action {
    readonly type = AuthActionType.DO_LIKEED

    constructor(public payload: string) {}
}

export class DoLikeSuccessAction implements Action {
    readonly type = AuthActionType.DO_LIKEED_SUCCESS

    constructor(public payload: string) {}
}

export class RemoveLikeAction implements Action {
    readonly type = AuthActionType.REMOVE_LIKEED

    constructor(public payload: string) {}
}

export type AuthAction 
= DoLoginAction 
| DoLoginSuccessAction 
| DoLoginFailAction
| DoLogoutAction
| DoLikeAction
| DoLikeSuccessAction
| RemoveLikeAction