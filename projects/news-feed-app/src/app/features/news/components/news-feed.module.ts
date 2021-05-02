import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../../shared/shared.module';
import { NewsFeedRoutingModule } from './news-feed-routing.module';
import { NewsFeedComponent } from './news-feed.component';
import { NewsFacade } from './../news.facade';
import { FEATURE_NAME, reducers } from '../../../shared/store';

@NgModule({
  declarations: [
    NewsFeedComponent
  ],
  imports: [

    SharedModule,
    // StoreModule.forFeature({name: NEWS_KEY, reducer: NewsReducer}),
    StoreModule.forFeature(FEATURE_NAME, reducers),
    NewsFeedRoutingModule
  ],
  providers:[ NewsFacade ]
})
export class NewsFeedModule { }
