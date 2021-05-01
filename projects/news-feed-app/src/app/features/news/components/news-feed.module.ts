import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../../shared/shared.module';
import { NewsReducer } from '../news.reducer';
import { NewsFeedRoutingModule } from './news-feed-routing.module';
import { NewsFeedComponent } from './news-feed.component';
import { NEWS_FEED_KEY } from './../news.model';

@NgModule({
  declarations: [
    NewsFeedComponent
  ],
  imports: [

  SharedModule,
    StoreModule.forFeature(NEWS_FEED_KEY, NewsReducer),
    StoreModule.forFeature('news', {newsFeed:  NewsReducer}),
    NewsFeedRoutingModule
  ]
})
export class NewsFeedModule { }
