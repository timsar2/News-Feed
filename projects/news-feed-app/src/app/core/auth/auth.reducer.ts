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
                    userName: action.payload,
                    isAuthenticated: false,
                    loginInfo: {} as UserInfo,
                    userLike: {} as UserLikes,
                    token: ''
                }
            })

        case AuthActionType.DO_LOGIN_SUCCESS:
            return {...state, authInfo: action.payload};

        case AuthActionType.DO_LOGIN_FAIL:
            return {...state, error: action.payload as Error};

        case AuthActionType.DO_LOGOUT:
            return {...state, authInfo: {} as AuthInfo};

        case AuthActionType.DO_LIKEED:
            return state
        
        case AuthActionType.DO_LIKEED_SUCCESS:
            return Object.assign({} as AuthInfo, state, {
                authInfo: {
                    isAuthenticated: state.authInfo.isAuthenticated,
                    loginInfo: state.authInfo.loginInfo,
                    userLike: {
                        ...state.authInfo.userLike,
                        news: [...state.authInfo.userLike.news, action.payload]
                    },
                    token: state.authInfo.token,
                }
            })

        case AuthActionType.REMOVE_LIKEED:
            return Object.assign({} as AuthInfo, state, {
                authInfo: {
                    isAuthenticated: state.authInfo.isAuthenticated,
                    loginInfo: state.authInfo.loginInfo,
                    userLike: {
                        ...state.authInfo.userLike,
                        news: [...state.authInfo.userLike.news.filter(item => item != action.payload)]
                    },
                    token: state.authInfo.token,
                }
            })
            
        default:
            return state
    }
}