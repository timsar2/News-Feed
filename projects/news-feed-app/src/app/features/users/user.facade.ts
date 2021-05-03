import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { State } from "../../shared/store";
import { DeSelectUser, LoadUserAction, SelectUser } from "./user.actions";
import { selectAllUser, selectedUser } from './user.selectors';

@Injectable()
export class UserFacade {
    public userList$ = this.appState$.pipe(select(selectAllUser));

    constructor(private appState$: Store<State>) {}

    loadUsers() {
        this.appState$.dispatch(new LoadUserAction);
    }

    selectUser(userId: string) {
        this.appState$.dispatch(new SelectUser(userId));
    }
    
    deSelecteUser() {
        this.appState$.dispatch(new DeSelectUser());
    }
}