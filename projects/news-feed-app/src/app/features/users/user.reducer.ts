import { createFeatureSelector } from "@ngrx/store";
import { UserAction, UserType } from "./user.action";
import { UserInfo, UserState } from "./user.mode";

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
        "id": "",
        "userName": "",
        "fullName": ""
    }
}

export function UserReducer(state: UserState = initialState, action: UserAction) {
    switch (action.type) {
        case UserType.LOAD_USER:
            return state;
        case UserType.SELECT_USER:
            return  {...state,selectedUser: state.userList.filter(o => o.id == action.payload)[0]};
        case UserType.DESELECT_USER:
            return  {...state,selectedUser: {} as UserInfo};
        default:
            return state;
    }

}

