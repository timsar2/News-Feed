import { Action } from "@ngrx/store";

export enum UserType {
    LOAD_USER =     '[USER] Load Users',
    SELECT_USER =   '[USER] Select Users',
}

export class LoadUserAction implements Action {
    readonly type = UserType.LOAD_USER;
}

export class SelectUser implements Action {
    readonly type = UserType.SELECT_USER
    constructor(public payload: string) {}
}

export type UserAction = LoadUserAction | SelectUser