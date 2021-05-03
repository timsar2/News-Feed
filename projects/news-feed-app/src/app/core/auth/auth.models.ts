import { UserInfo, UserLikes } from "../../features/users/user.mode";

export interface AuthInfo {
    isAuthenticated: boolean;
    loginInfo: UserInfo;
    userLike: UserLikes;
    token: string;
}

export interface AuthState {
    authInfo: AuthInfo
}