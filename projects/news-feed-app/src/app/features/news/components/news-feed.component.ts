import { Component, OnInit } from '@angular/core';
import { NewsFacade } from './../news.facade';

@Component({
  selector: 'viktor-task-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  constructor(public newsFacade: NewsFacade) {
  }

  ngOnInit(): void {
  }

}
