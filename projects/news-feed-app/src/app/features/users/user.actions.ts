import { Action } from "@ngrx/store";

export enum UserType {
    LOAD_USER =     '[USER] Load Users',
    SELECT_USER =   '[USER] Select Users',
    DESELECT_USER =   '[USER] DESelect Users',
}

export class LoadUserAction implements Action {
    readonly type = UserType.LOAD_USER;
}

export class SelectUser implements Action {
    readonly type = UserType.SELECT_USER
    constructor(public payload: string) {}
}

export class DeSelectUser implements Action {
    readonly type = UserType.DESELECT_USER
}

export type UserAction = LoadUserAction | SelectUser | DeSelectUser