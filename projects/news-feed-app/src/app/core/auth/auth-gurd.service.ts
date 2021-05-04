import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { Observable } from "rxjs";
import { AuthFacade } from './auth.facade';
import { of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthGurdService implements CanActivate {
    constructor(private authFacade: AuthFacade, private router: Router) {
        
    }

    canActivate(): Observable<boolean> {
        if(!this.authFacade.isAuthenticated$){
            this.router.navigate(['/login']);
        }
        return this.authFacade.isAuthenticated$;
    }
}