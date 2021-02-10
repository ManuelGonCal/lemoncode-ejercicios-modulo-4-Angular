import { Injectable } from '@angular/core';
import { MemberEntity } from '../model/member-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  logged: boolean = false
  
  member: MemberEntity = {
    email : '',
    password: ''
  }

  constructor() { }

  login({email, password}: MemberEntity): boolean {
    const logginMember: MemberEntity = { email, password }

    if (email === 'master8@lemoncode.net' && password === '12345678') {
     this.logged = true;
     this.member = {...logginMember}
      return true
    }

    return false;
  }

  logout(): void {
    if (this.logged) {
      this.logged = false
      this.member = {
        email: '',
        password: ''
      }
    }
  }

  isLogged(): boolean {
    return this.logged
  }

  getUsername(): string {
    return this.member.email
  }
}
