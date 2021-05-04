import { Component, OnInit } from '@angular/core';
import { AuthFacade } from './../auth.facade';

@Component({
  selector: 'viktor-task-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authFacade: AuthFacade) { }

  ngOnInit(): void {
  }

  loginBy(userName: string){
    this.authFacade.login(userName);
  }
}
