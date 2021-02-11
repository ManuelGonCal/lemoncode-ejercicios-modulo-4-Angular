import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  togglePrivateMenu(): boolean {
    return this.userService.isLogged();
  }
}
