import { Component, OnInit } from '@angular/core';
import { AuthFacade } from './../../auth/auth.facade';

@Component({
  selector: 'viktor-task-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(public authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.authFacade.login('mrg');
  }

  logout() {
    this.authFacade.logOut();
  }
}
