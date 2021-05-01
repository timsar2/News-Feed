import { EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

export const NEWS_FEED_KEY = 'newsFeed';

export enum UserActivity {
    CREATED_NEW_POST    = 'Posted A News',
    LIKED_POST          = 'Liked This News',
    ADDED_FAVORITE      = 'Followed This User'
}

export interface News {
    id?          : string;
    createdBy?   : string;
    createdTime? : string;
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

export interface NewsFeedState {
    list: NewsFeed[],
    loading: boolean,
    error: Error
}

export interface NewsState {
    readonly newsFeed: NewsFeedState
}

// export const selectNewsFeed = (state: NewsState) => state.newsFeed;
// export const selectNewsFeed = createFeatureSelector<NewsState, NewsFeedState>(NEWS_FEED_KEY);