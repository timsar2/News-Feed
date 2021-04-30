import { UserActivity } from "../../shared/models/auth/user.model";

export interface News {
    id          : string;
    CreatedBy   : string;
    CreatedTime : string;
    Subject     : string;
    content     : string;
    picUrl      : string;
}

export interface NewsFeed {
    id: string;    
    createdBy: string;
    createdTime: string;
    fullName: string;
    userActivity: UserActivity;
    picUrl: string;
}
