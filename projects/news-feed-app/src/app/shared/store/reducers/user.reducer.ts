import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserAction, UserType } from "../action/user.action";
import { UserState } from './../../../features/users/user.mode';

export const FEATURE_USER = 'userList';
export const selectUsersFeature = createFeatureSelector<UserState, UserState>(
    FEATURE_USER
);

export const selectedUsersFeature = createFeatureSelector<UserState, UserState>(
    FEATURE_USER
);

const initialState: UserState = {
    userList: [
        {
            "id": "d700a66c-517d-4acb-ad92-8fc3f500096f",
            "userName": "mrg",
            "fullName": "Mohammad Reza Golab"
        }
    ],
    selectedUser: {
        "id": "d700a66c-517d-4acb-ad92-8fc3f500096f",
        "userName": "mrg",
        "fullName": "Mohammad Reza Golab"
    }
}

export function UserReducer(state: UserState = initialState, action: UserAction) {
    switch (action.type) {
        case UserType.LOAD_USER:
            return state;
        default:
            return state;
    }

}

