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

export interface UserState {
    readonly userList: UserInfo[]
    readonly selectedUser: UserInfo
}