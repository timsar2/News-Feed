import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo, UserState } from '../user.mode';
import { Store, select } from '@ngrx/store';
import { News } from '../../news/news.model';
import { State } from '../../../shared/store';
import { selectAllNews, selectNewsbyUser } from '../../news/news.selectors';
import { selectAllUser } from '../user.selectors';
import { DeSelectUser, LoadUserAction, SelectUser } from '../user.action';

@Component({
  selector: 'viktor-task-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList$: Observable<UserInfo[]>;
  news$: Observable<News[]>;
  constructor(private store: Store<State>) {
    this.userList$ = this.store.pipe(select(selectAllUser));
    // this.news$ = this.store.select(store => store.feature.news.newsList);
    this.news$ = this.store.pipe(select(selectNewsbyUser));    
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadUserAction);
  }

  deSelecteUser() {
    this.store.dispatch(new DeSelectUser());
  }

  selectUser(userId: string) {
    this.store.dispatch(new SelectUser(userId));
  }
}
