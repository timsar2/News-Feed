import { Action } from "@ngrx/store";

export enum UserType {
    LOAD_USER = '[USER] Load users'
}

export class LoadUserAction implements Action {
    readonly type = UserType.LOAD_USER;
}

export type UserAction = LoadUserAction