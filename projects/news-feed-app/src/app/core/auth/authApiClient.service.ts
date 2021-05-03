import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { delay, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { environment } from "projects/news-feed-app/src/environments/environment";

import { AuthInfo } from './auth.models';

@Injectable()
export class AuthApiClient {
    private baseUrl = environment.APIEndpoint;

    constructor(private http: HttpClient) { }

    logging(userName: string){
        return this.http.get<AuthInfo>(this.baseUrl + 'login/' + userName)
        
            .pipe(
                // map((data: AuthInfo) => {
                //     return (data) 
                // }) 
        )
    }
}