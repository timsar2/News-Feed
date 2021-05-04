import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { environment } from "projects/news-feed-app/src/environments/environment";
import { News, NewsFeed } from "./news.model";

@Injectable()
export class NewsApiClient {
    private baseUrl = environment.APIEndpoint;

    constructor(private http: HttpClient) { }

    loadNews(){
        return this.http.get<News[]>(this.baseUrl + 'news')
        .pipe();
    }

    loadNewsFeed(){
        return this.http.get<NewsFeed[]>(this.baseUrl + 'newsFeed')
        .pipe();
    }

    createNews(news: News){
        return this.http.post<News>(this.baseUrl + 'news', news);
    }
}