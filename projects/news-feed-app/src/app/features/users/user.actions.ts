import { Action } from "@ngrx/store";
import { Users } from './user.mode';

export enum UserActionType {
    LOAD_USERS              = '[USER] Load Users',
    LOAD_USERS_SUCCESS      = '[USER] Load Users Success',
    SELECT_USER             = '[USER] Select Users',
    DESELECT_USER           = '[USER] DESelect Users',    
}

export class LoadUsersAction implements Action {
    readonly type = UserActionType.LOAD_USERS;
}

export class LoadUsersActionSuccess implements Action {
    readonly type = UserActionType.LOAD_USERS_SUCCESS;
    constructor(public payload: Users) {}
}

export class SelectUser implements Action {
    readonly type = UserActionType.SELECT_USER
    constructor(public payload: string) {}
}

export class DeSelectUser implements Action {
    readonly type = UserActionType.DESELECT_USER
}

export type UserAction 
= LoadUsersAction 
| LoadUsersActionSuccess
| SelectUser 
| DeSelectUser
