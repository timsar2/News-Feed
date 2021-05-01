import { UserAction, UserType } from "./user.action";
import { UserInfo, UserInfoState } from "./user.mode";


const initialState: UserInfoState = {
    list: [
        {
            "id": "d700a66c-517d-4acb-ad92-8fc3f500096f",
            "userName": "mrg",
            "fullName": "Mohammad Reza Golab"
        }
    ],
    loading: false,
    error: {message: '', name: '', stack: ''} as Error    
}

export function UserReducer(state: UserInfoState = initialState, action: UserAction) {
    switch (action.type) {
        case UserType.LOAD_USER:
            return state;
        default:
            return state;
    }

}