export const USER_LOAD = 'userInfo';

export interface UserInfo {
    id: string;
    userName: string;
    fullName: string;
}

export interface UserLikes {
    id      : string;
    userId  : string;
    newsId  : string;
}

export interface UserFavorite {
    id      : string;
    userId  : string;
    newsId  : string;
}

export interface UserInfoState {
    list: UserInfo[],
    loading: boolean,
    error: Error
}

export interface UserState {
    readonly userInfo: UserInfoState
}