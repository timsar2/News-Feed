import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AuthInfo } from './auth.models';

@Injectable()
export class AuthApiClient {
    private baseUrl = "http://localhost:3000/"

    constructor(private http: HttpClient) { }

    logging(userName: string){
        return this.http.get<AuthInfo>('login/' + userName)
            .pipe((data) =>
            {console.log(data); return data;}
        )
    }
}