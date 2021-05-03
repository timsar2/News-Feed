import { NewsAction, NewsActionType } from "./news.actions";
import { NewsState, UserActivity } from "./news.model";


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
        },
        {
            "id": "2",
            "createdBy": "2",
            "createdTime": '1619851468404',
            "subject": "By Jamie Morris",
            "content": "Angular State Management Using NgRx",
            "imgUrl": "https://miro.medium.com/max/3840/1*Fz75ztQP5sud0w-HJraEXA.png"
        }
    ]
}

export function NewsReducer(state: NewsState = initialState, action: NewsAction) {
    switch(action.type){
        case NewsActionType.LOAD_NEWS:
            return state
        case NewsActionType.LOAD_NEWS_FEED:
            return state;
        case NewsActionType.CREATE_NEWS:
            return {
                ...state,
                newsList: [...state.newsList, action.payload],
                NewsFeed: [...state.newsFeed]
            };
        case NewsActionType.CREATE_NEWS_SUCCESS:
            return {
                ...state,
                newsList: [...state.newsList, action.payload],
                NewsFeed: [...state.newsFeed]
            };
        default:
            return state
    }
}

