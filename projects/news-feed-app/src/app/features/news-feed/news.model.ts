export enum UserActivity {
    CREATED_NEW_POST    = 0,
    LIKED_POST          = 1,
    ADDED_FAVORITE      = 2
}

export interface News {
    id          : string;
    createdBy   : string;
    createdTime : string;
    subject     : string;
    content     : string;
    imgUrl      : string;
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
