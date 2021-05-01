import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadNewsFeedAction } from '../news.action';
import { NewsFeed, NewsFeedState, NewsState } from './../news.model';

@Component({
  selector: 'viktor-task-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  newsFeedList$: Observable<NewsFeed[]>;
  constructor(private store: Store<NewsState>) {
    this.newsFeedList$ = this.store.select(store => {return store.newsFeed.list})
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadNewsFeedAction)
  }

}
