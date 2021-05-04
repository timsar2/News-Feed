import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { delay, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

import { environment } from "projects/news-feed-app/src/environments/environment";
import { Users } from "./user.mode";

@Injectable()
export class UserApiClient {
    private baseUrl = environment.APIEndpoint;

    constructor(private http: HttpClient) { }

    loadUsers(){
        return this.http.get<Users>(this.baseUrl + 'getUsers')
            .pipe( 
                //do somthing like delay(500)
            )
    }
}