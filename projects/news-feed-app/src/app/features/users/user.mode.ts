export interface UserInfo {
    id: string;
    userName: string;
    fullName: string;
}

export interface UserLikes {
    news  : string[];
}

export interface Users {
    list: UserInfo[]
    selectedUser: UserInfo
}

export interface UserState {
    readonly userList: Users;
}