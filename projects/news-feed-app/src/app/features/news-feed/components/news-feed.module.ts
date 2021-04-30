import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { NewsFeedRoutingModule } from './news-feed-routing.module';
import { NewsFeedComponent } from './news-feed.component';


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
