import { Component, OnInit } from '@angular/core';
import { UserFacade } from './../user.facade';
import { NewsFacade } from './../../news/news.facade';

@Component({
  selector: 'viktor-task-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

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

  likeNews(event: any) {
    event.target.classList.toggle('fa-heart');
    event.target.classList.toggle('fa-heart-o');
  }
}
