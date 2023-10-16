import {Component, Input} from '@angular/core';
import {User} from "../../model/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.css']
})
export class UserBlockComponent {

  @Input() user!: User;
  constructor(private router: Router) {}

  openUser(id: Number) {
    this.router.navigate(['/users/'+id])
  }
}
