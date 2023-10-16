import {Component, Input} from '@angular/core';
import {User} from "../../model/User";

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.css']
})
export class UserBlockComponent {

  @Input() user!: User;
  constructor() {
  }
}
