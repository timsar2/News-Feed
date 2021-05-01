import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo, UserState } from '../user.mode';
import { Store } from '@ngrx/store';
import { LoadUserAction } from '../user.action';

@Component({
  selector: 'viktor-task-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList$: Observable<UserInfo[]>;
  constructor(private store: Store<UserState>) {
    this.userList$ = this.store.select(store => store.userInfo.list)
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadUserAction);
  }

}
