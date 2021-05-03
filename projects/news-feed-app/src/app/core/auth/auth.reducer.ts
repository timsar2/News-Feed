import { UserInfo, UserLikes } from '../../features/users/user.mode';
import { AuthAction, AuthActionType } from './auth.actions';
import { AuthInfo, AuthState } from './auth.models';

export const initialState: AuthState = {
    authInfo: {
        isAuthenticated: false,
        loginInfo: {} as UserInfo,
        userLike: {} as UserLikes,
        token: ''
    },
    error: {} as Error  //{message: '', name: '', stack: ''}
};

export function AuthReducer(state: AuthState = initialState, action: AuthAction) {
    switch(action.type) {
        case AuthActionType.DO_LOGIN:
            return Object.assign({} as AuthInfo, state, {
                authInfo: {
                    "userName": action.payload,
                }
            })
        case AuthActionType.DO_LOGIN_SUCCESS:
            return {...state, authInfo: action.payload};
        case AuthActionType.DO_LOGIN_FAIL:
            console.log(action.payload);
            return {...state, error: action.payload as Error};
        case AuthActionType.DO_LOGOUT:
            return {...state, isAuthenticated: false};
        default:
            return state
    }
}