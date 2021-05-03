import { createFeatureSelector } from "@ngrx/store";
import { UserAction, UserActionType } from "./user.actions";
import { UserInfo,  UserState } from "./user.mode";

export const FEATURE_USER = 'userList';
export const selectUsersFeature = createFeatureSelector<UserState, UserState>(
    FEATURE_USER
);

export const selectedUsersFeature = createFeatureSelector<UserState, UserState>(
    FEATURE_USER
);


const initialState: UserState = {
    userList:{
        list: [
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
        } as UserInfo
    }
}

export function UserReducer(state: UserState = initialState, action: UserAction) {
    switch (action.type) {
        case UserActionType.LOAD_USERS:
            return state;
        case UserActionType.LOAD_USERS_SUCCESS:
            return {...state, userList: action.payload};
        case UserActionType.SELECT_USER:
            return  {...state, 
                userList: {
                    list: [...state.userList.list],
                    selectedUser: {...state.userList.selectedUser, ...state.userList.list.filter(o => o.id == action.payload)[0]}
                }
            };
        case UserActionType.DESELECT_USER:
            return  {...state, 
                userList: {
                    list: [...state.userList.list],
                    selectedUser: {} as UserInfo 
                }
            };
        default:
            return state;
    }
}

