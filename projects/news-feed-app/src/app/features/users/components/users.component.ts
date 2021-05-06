import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

import { UserFacade } from './../user.facade';
import { NewsFacade } from './../../news/news.facade';
import { UserLikes } from '../user.mode';
import { News } from '../../news/news.model';
import { AuthFacade } from './../../../core/auth/auth.facade'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  doLikeNews(newsId: string) {
    console.log('fromApi: ', newsId);
    this.authFacade.doLikeNews(newsId);
  }

  hasLiked(newsId: string): Observable<boolean>{    
    return this.userFacade.userNewsLikes$.pipe(
      map(o => {return o.includes(newsId) ? true : false})
    );
    
  }

  CreateFakeNews() {
    const news: any ={
      id: '',
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


