import { Injectable } from '@angular/core';
import { MemberEntity } from '../model/member-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  logged: boolean;

  member: MemberEntity

  constructor() {
    this.logged = localStorage.getItem('user') !== null;

    this.member = {
      email : '',
      password: ''
    }
  }

  login({email, password}: MemberEntity): boolean {
    const logginMember: MemberEntity = { email, password }

    if (logginMember.email === 'master8@lemoncode.net' && logginMember.password === '12345678') {
      localStorage.setItem('user', logginMember.email);

      this.logged = true;
      this.member = {...logginMember}
      return true
    }

    return false;
  }

  logout(): void {
    if (this.logged) {
      localStorage.removeItem('user');

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
    return this.member.email ?? ''
  }
}
