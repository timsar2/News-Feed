import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadNewsFeedAction } from '../news.action';
import { NewsFeed, NewsFeedState, NewsState } from './../news.model';
import { NewsFacade } from './../news.facade';

@Component({
  selector: 'viktor-task-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  newsFeedList$: Observable<NewsFeed[]>;
  constructor(public newsFacade: NewsFacade) {
    this.newsFeedList$ = this.newsFacade.getNewsFeed()
  }

  ngOnInit(): void {
  }

}
