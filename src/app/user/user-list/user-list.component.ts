import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: User[]

  constructor(
    private userService: UserService
  ) {
    this.users = []
    userService.getUsers()
      .subscribe(users => this.users = users)
  }
}
