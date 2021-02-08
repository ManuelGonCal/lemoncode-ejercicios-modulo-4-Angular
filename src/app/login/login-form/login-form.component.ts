import { Component, OnInit } from '@angular/core';
import { MemberEntity } from 'src/app/model/member-model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  member: MemberEntity;

  constructor() {

    this.member = {
      login: '',
      password: '',
      role: ''
    }
  }

  ngOnInit(): void {
  }
}
