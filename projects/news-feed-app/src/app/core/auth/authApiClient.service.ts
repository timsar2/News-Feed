import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { delay, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { environment } from "projects/news-feed-app/src/environments/environment";

import { AuthInfo, AuthState } from './auth.models';
import { select, Store } from "@ngrx/store";
import { selectAccessToken } from "./auth.selectors";
import { AppState } from "../core.state";

@Injectable()
export class AuthApiClient {
    private baseUrl = environment.APIEndpoint;

    constructor(private http: HttpClient, private appState$: Store<AppState>) { }

    logging(userName: string){
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
}