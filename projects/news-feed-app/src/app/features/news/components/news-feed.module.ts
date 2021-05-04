import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../../shared/shared.module';
import { NewsFeedRoutingModule } from './news-feed-routing.module';
import { NewsFeedComponent } from './news-feed.component';
import { NewsFacade } from './../news.facade';
import { FEATURE_NAME, reducers } from '../../../shared/store';
import { NewsApiClient } from './../newsApiClient';
import { NewsEffects } from '../news.effects';

@NgModule({
  declarations: [
    NewsFeedComponent
  ],
  imports: [



    SharedModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([NewsEffects]),
    NewsFeedRoutingModule
  ],
  providers:[ NewsFacade, NewsApiClient ]
})
export class NewsFeedModule { }
