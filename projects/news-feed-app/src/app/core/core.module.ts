/**
 * 
 * CoreModule just contains global singletons class or service providers so the application start up time will be faster
 *
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { coreReducers } from './core.state';
import { AuthFacade } from './auth/auth.facade';
import { AuthApiClient } from './auth/authApiClient.service';
import { AuthEffects } from './auth/auth.effects';

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
    MatButtonModule,
    MatToolbarModule
  ],
  exports:[
    MainLayoutComponent
  ],
  providers: [AuthFacade, AuthApiClient]
})
export class CoreModule { }
