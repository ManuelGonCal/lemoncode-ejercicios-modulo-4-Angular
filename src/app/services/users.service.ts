import { Injectable } from '@angular/core';
import { MemberEntity } from "../model/member-model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  adminMember: MemberEntity

  constructor() {
    this.adminMember = {
      email: 'master8@lemoncode.net',
      password: '12345678'
    }
  }

  // TODO:
  // login(): boolean {
  //   return true
  // }

  // logout(): void {

  // }

  // isLogged(): boolean {
  //   return true
  // }

  // getUsername(): string {
  //   return ''
  // }
}
