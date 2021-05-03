import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectIsAuthenticated } from '../../auth/auth.selectors';
import { Observable } from 'rxjs';
import { AppState } from '../../core.state';
import { AuthLogin } from '../../auth/auth.actions';
import { AuthInfo } from '../../auth/auth.models';
import { UserInfo, UserLikes } from '../../../features/users/user.mode';
import { selectLoginInfo } from './../../auth/auth.selectors';

@Component({
  selector: 'viktor-task-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  loginInfo$: Observable<UserInfo>;

  constructor(private store: Store<AppState>) { 
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.loginInfo$ = this.store.pipe(select(selectLoginInfo));
  }

  ngOnInit(): void {
    const authInfo = {
      isAuthenticated: true,
      loginInfo: {
        "id": "d700a66c-517d-4acb-ad92-8fc3f500096f",
        "userName": "mrg",
        "fullName": "Mohammad Reza Golab"
      },
      userLike: {
        news: ['1']
      },
      token: 'c400b57d'
  } as AuthInfo
    this.store.dispatch(new AuthLogin(authInfo))
  }

}
