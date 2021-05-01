import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { USER_LOAD } from './../user.mode';
import { UserReducer } from './../user.reducer';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
  SharedModule,
    UsersRoutingModule,
    StoreModule.forFeature(USER_LOAD, UserReducer)
  ]
})
export class UsersModule { }
