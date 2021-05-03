import { Component, OnInit } from '@angular/core';
import { AuthInfo } from '../../auth/auth.models';
import { AuthFacade } from './../../auth/auth.facade';

@Component({
  selector: 'viktor-task-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(public authFacade: AuthFacade) {}

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
    } as AuthInfo;
    this.authFacade.login("mrg");
  }

}
