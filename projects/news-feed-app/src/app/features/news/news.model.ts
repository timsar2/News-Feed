export enum UserActivity {
    CREATED_NEW_POST    = 'Posted A News',
    LIKED_POST          = 'Liked This News',
    ADDED_FAVORITE      = 'Followed This User'
}

export interface News {
    id              : string;
    createdBy?      : string;
    createdTime?    : string;
    subject         : string;
    content         : string;
    imgUrl          : string;
}

export interface NewsFeed {
    id: string;
    newsId: string;    
    createdBy: string;
    createdTime: string;
    fullName: string;
    userActivity: UserActivity;
    imgUrl: string;
}

export interface NewsState {
    readonly newsFeed:   NewsFeed[],
    readonly newsList:       News[];
};