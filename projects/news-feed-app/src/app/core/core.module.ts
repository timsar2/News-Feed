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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { coreReducers } from './core.state';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    // StoreModule.forRoot({}),
    StoreModule.forRoot(coreReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    // material
    MatButtonModule,
    MatToolbarModule
  ],
  exports:[
    MainLayoutComponent
  ]
})
export class CoreModule { }
