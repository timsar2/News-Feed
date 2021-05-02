import { createSelector } from "@ngrx/store";
import { State } from "../../shared/store";
import { UserInfo } from "../users/user.mode";
import { selectedUser } from "../users/user.selectors";
import { News } from "./news.model";

export const selectAllNews = (state: State) => state.feature.news.newsList;

export const selectNewsbyUser = createSelector(
    selectedUser,
    selectAllNews,
    (selectedUser: UserInfo, allNews: News[]) => {
        if (selectedUser.id != undefined && allNews) {
            return allNews.filter((news: News) => news.createdBy === selectedUser.id);
        } else {
            return allNews;
        }
    }
);