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
