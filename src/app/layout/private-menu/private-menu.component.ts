import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-private-menu',
  templateUrl: './private-menu.component.html',
  styleUrls: ['./private-menu.component.scss']
})
export class PrivateMenuComponent implements OnInit {
  username: string = '';
  isLogged: boolean;

  constructor(private userService: UsersService) {
    this.username = localStorage.getItem('user') ?? this.userService.getUsername()
    this.isLogged = this.userService.isLogged();
  }

  ngOnInit(): void {
  }

}
