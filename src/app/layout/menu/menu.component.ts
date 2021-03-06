import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  alreadyLogged() {
    return !this.userService.isLogged()
  }
}
