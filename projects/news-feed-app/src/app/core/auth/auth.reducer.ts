import { UserInfo, UserLikes } from '../../features/users/user.mode';
import { AuthAction, AuthActionType } from './auth.actions';
import { AuthState } from './auth.models';

export const initialState: AuthState = {
    authInfo: {
        isAuthenticated: false,
        loginInfo: {} as UserInfo,
        userLike: {} as UserLikes,
        token: ''
    }
};

export function AuthReducer(state: AuthState = initialState, action: AuthAction) {
    switch(action.type) {
        case AuthActionType.AUTH_LOGIN:
            return {...state, authInfo: action.payload};
        case AuthActionType.AUTH_LOGOUT:
            return {...state, isAuthenticated: false};
        default:
            return state
    }
}