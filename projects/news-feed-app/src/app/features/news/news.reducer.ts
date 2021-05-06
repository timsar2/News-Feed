import { NewsAction, NewsActionType } from "./news.actions";
import { NewsState, UserActivity } from "./news.model";


export const NEWS_KEY = 'news';

const initialState: NewsState = {
    newsFeed: [],
    newsList: []
}

export function NewsReducer(state: NewsState = initialState, action: NewsAction) {
    switch(action.type){
        case NewsActionType.LOAD_NEWS:
            return state

        case NewsActionType.LOAD_NEWS_SUCCESS:
            return {
                ...state,
                newsList: action.payload,
                newsFeed: [...state.newsFeed]
            };

        case NewsActionType.LOAD_NEWS_FEED:
            return state;

        case NewsActionType.LOAD_NEWS_FEED_SUCCESS:
            return {
                ...state, 
                newsList: [...state.newsList], 
                newsFeed: action.payload
            }

        case NewsActionType.CREATE_NEWS:
            return state

        case NewsActionType.CREATE_NEWS_SUCCESS:
            return {
                ...state,
                newsList: [action.payload, ...state.newsList],
                NewsFeed: [...state.newsFeed]
            };

        default:
            return state
    }
}

