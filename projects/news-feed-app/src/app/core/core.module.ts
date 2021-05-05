/**
 * 
 * CoreModule just contains global singletons class or service providers so the application start up time will be faster
 *
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { coreReducers } from './core.state';
import { AuthFacade } from './auth/auth.facade';
import { AuthApiClient } from './auth/authApiClient.service';
import { AuthEffects } from './auth/auth.effects';
import { TokenInterceptor } from './auth/token.interceptor';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [  



    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    
    // StoreModule.forRoot({}),
    StoreModule.forRoot(coreReducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    
    // material
    MatButtonModule
  ],
  exports:[
    MainLayoutComponent
  ],
  providers: [
    AuthFacade, 
    AuthApiClient,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class CoreModule { }
