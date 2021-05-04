import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { delay, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { environment } from "projects/news-feed-app/src/environments/environment";

import { AuthInfo, AuthState } from './auth.models';
import { select, Store } from "@ngrx/store";
import { selectAccessToken } from "./auth.selectors";
import { AppState } from "../core.state";
import { News } from "../../features/news/news.model";

@Injectable()
export class AuthApiClient {
    private baseUrl = environment.APIEndpoint;

    constructor(private http: HttpClient, private appState$: Store<AppState>) { }

    doLogging(userName: string){
        return this.http.get<AuthInfo>(this.baseUrl + 'login/' + userName)
        
            .pipe(
                // map((data: AuthInfo) => {
                //     return (data) 
                // }) 
        )
    }

    getJwtToken(): string  {
        let accessTokent = '';
        this.appState$.pipe(select(selectAccessToken)).subscribe(
            t => accessTokent =  t);
        return accessTokent;
    }

    doLikeNews(newsId: string){
        const news = {
            "id": "1",
            "createdBy": "d700a66c-517d-4acb-ad92-8fc3f500096f",
            "createdTime": '1619841468404',
            "subject": "Good News",
            "content": "The COVID‑19 vaccine was produced",
            "imgUrl": "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/vaccine_660_060520034904.jpg"
        } as News
        return this.http.post<{newsId: string}>(this.baseUrl + 'likes', {newsId}).pipe();
    }
}