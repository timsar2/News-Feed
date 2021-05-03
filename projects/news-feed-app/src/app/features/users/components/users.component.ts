import { Component, OnInit } from '@angular/core';
import { UserFacade } from './../user.facade';
import { NewsFacade } from './../../news/news.facade';
import { UserLikes } from '../user.mode';
import { News } from '../../news/news.model';
import { selectedUser } from '../user.selectors';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'viktor-task-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userLike: UserLikes = {news:['1']};
  constructor(public userFacade: UserFacade, public newsFacade: NewsFacade) {}

  ngOnInit(): void {
    this.userFacade.loadUsers();
    this.newsFacade.loadNews();
  }

  deSelecteUser() {
    this.userFacade.deSelecteUser();
  }

  selectUser(userId: string) {
    this.userFacade.selectUser(userId);
  }

  likeNews(newsId: string) {
    
  }

  // disLikeNews(event: any){
  //   event.target.classList.toggle('fa-heart');
  //   event.target.classList.toggle('fa-heart-o');
  // }

  hasLiked(newsId: string): boolean{
    return Boolean(+ this.userLike.news.filter(o => o.includes(newsId)));    
  }

  trackByNews(index: number, item: News): string {
    return item.id;  
  }  
}


