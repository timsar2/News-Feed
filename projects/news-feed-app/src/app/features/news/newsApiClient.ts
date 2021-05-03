import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

import { environment } from "projects/news-feed-app/src/environments/environment";
import { News } from "./news.model";

@Injectable()
export class UserApiClient {
    private baseUrl = environment.APIEndpoint;

    constructor(private http: HttpClient) { }

    loadUsers(news: News){
        // const httpOptions = {
        //     headers: new HttpHeaders({
        //         'Authorization': this.appState$.pipe(select(selectAccessToken)),
        //         'Content-Type': 'application/json'
        //     })
        // };

        // return this.http.post<News>(this.baseUrl + '/createNews', news, options)
        //     .pipe(
        //     catchError(this.handleError('addHero', hero))
        // );
        // return this.http.post(news, this.baseUrl + 'getUsers')
        //     .pipe( 
        //         //do somthing like delay
        //     )
    }
}