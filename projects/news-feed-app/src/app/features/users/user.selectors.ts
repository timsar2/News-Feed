import { createSelector } from "@ngrx/store";
import { FeatureState, selectFeature, State } from "../../shared/store";


export const selectAllUser = createSelector(
    selectFeature,    
    (state: FeatureState) => state.users.userList.list
);

export const selectedUser = (state: State) => state.feature.users.userList.selectedUser;

export const selectedUserNewsLikes = (state: State) => state.auth.authInfo.userLike.news;