import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo, UserState } from '../user.mode';
import { Store, select } from '@ngrx/store';
import { LoadUserAction } from '../../../shared/store/action/user.action';
import { News } from '../../news/news.model';
import { selectAllUser, selectNewsbyUser, State } from '../../../shared/store';

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
    this.news$ = this.store.select(store => store.feature.news.newsList);
    
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadUserAction);
  }

}
