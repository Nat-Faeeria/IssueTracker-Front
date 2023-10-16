import {Component, Input} from '@angular/core';
import {User} from "../../model/User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  @Input() user!: User;
  constructor() {
  }
}
