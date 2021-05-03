import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

import { UserFacade } from './../user.facade';
import { NewsFacade } from './../../news/news.facade';
import { UserLikes } from '../user.mode';
import { News } from '../../news/news.model';
import { AuthFacade } from './../../../core/auth/auth.facade';

@Component({
  selector: 'viktor-task-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userLike: UserLikes = {news:['1']};
  constructor(
      public authFacade: AuthFacade,
      public userFacade: UserFacade,
      public newsFacade: NewsFacade
    ) {}

  ngOnInit(): void {
    this.userFacade.loadUsers();
    this.newsFacade.loadNews();
  }

  loginAsDiffrentUser(userName: string){
    this.authFacade.login(userName);
  }

  deSelecteUser() {
    this.userFacade.deSelecteUser();
  }

  selectUser(userId: string) {
    this.userFacade.selectUser(userId);
  }

  likeNews(newsId: string) {
    
  }

  hasLiked(newsId: string): boolean{
    return Boolean(+ this.userLike.news.filter(o => o.includes(newsId)));    
  }

  CreateFakeNews() {
    const news: any ={
      id: faker.random.uuid(),
      subject: faker.random.word(),
      content: faker.random.words(),
      imgUrl: faker.random.image(),
    } as News

    this.newsFacade.createFakeNews(news);
  }

  trackByNews(index: number, item: News): string {
    return item.id;  
  }  
}


