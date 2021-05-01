import { NewsState, UserActivity } from "../../../features/news/news.model";
import { NewsAction, NewsFeedActionType } from "../action/news.action";

export const NEWS_KEY = 'news';

const initialState: NewsState = {
    newsFeed: [
        {
            "id": "1",
            "newsId": "1",
            "createdBy": "d700a66c-517d-4acb-ad92-8fc3f500096f",
            "createdTime": '1619841468404',
            "fullName": "Mohammad Reza Golab",
            "userActivity": UserActivity.CREATED_NEW_POST,
            "imgUrl": "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/vaccine_660_060520034904.jpg"
        }
    ],
    newsList: [
        {
            "id": "1",
            "createdBy": "d700a66c-517d-4acb-ad92-8fc3f500096f",
            "createdTime": '1619841468404',
            "subject": "Good News",
            "content": "The COVID‑19 vaccine was produced",
            "imgUrl": "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/vaccine_660_060520034904.jpg"
        }
    ]
}

export function NewsReducer(state: NewsState = initialState, action: NewsAction) {
    switch(action.type){
        case NewsFeedActionType.LOAD_NEWS_FEED:
            return state;
        default:
            return state
    }
}

