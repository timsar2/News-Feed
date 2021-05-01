import { NewsFeedActionType, NewsAction } from "./news.action";
import { NewsFeed, NewsFeedState, NewsState } from "./news.model";

const initialState: NewsFeedState = {
        list: [
            {
                "id": "1",
                "newsId": "1",
                "createdBy": "d700a66c-517d-4acb-ad92-8fc3f500096f",
                "createdTime": '1619841468404',
                "fullName": "Mohammad Reza Golab",
                "userActivity": "Posted A News",
                "imgUrl": "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/vaccine_660_060520034904.jpg"
            }  as NewsFeed
        ] as NewsFeed[],
        loading: false,
        error: {message: '', name: '', stack: ''} as Error    
}

export function NewsReducer<T = NewsState>(state: NewsFeedState = initialState, action: NewsAction) {
    switch(action.type){
        case NewsFeedActionType.LOAD_NEWS_FEED:
            return state;
        default:
            return state
    }
}