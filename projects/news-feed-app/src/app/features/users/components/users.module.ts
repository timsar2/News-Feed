import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FEATURE_NAME, reducers } from '../../../shared/store';
import { UserFacade } from './../user.facade';
import { NewsFacade } from '../../news/news.facade';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../user.effects';
import { UserApiClient } from './../userApiClient';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [UserFacade, NewsFacade, UserApiClient]
})
export class UsersModule { }
