import { NgModule } from '@angular/core';

import { NewsFeedRoutingModule } from './news-feed-routing.module';
import { NewsFeedComponent } from './news-feed.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    NewsFeedComponent
  ],
  imports: [
    SharedModule,
    NewsFeedRoutingModule
  ]
})
export class NewsFeedModule { }
