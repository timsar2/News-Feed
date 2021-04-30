export enum UserActivity {
    CREATED_NEW_POST    = 0,
    LIKED_POST          = 1,
    ADDED_FAVORITE      = 2
}

export interface UserAction {
    userActivity: UserActivity;
}

export interface UserInfo {
    id: string;
    userName: string;
    fullName: string;
    token?  : string;
}

export interface UserLikesAndFavorite {
    id      : string;
    userId  : string;
    newsId  : string;
}
