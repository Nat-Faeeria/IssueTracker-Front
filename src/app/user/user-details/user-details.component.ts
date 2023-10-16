import {Component, Input} from '@angular/core';
import {User} from "../../model/User";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Fonction} from "../../model/Fonction";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  user!: User
  mode: String = "Edit"
  fonctions = Object.values(Fonction)

  constructor(
    private userService: UserService,
    private route: ActivatedRoute ) {
    const id_user: Number = Number(this.route.snapshot.paramMap.get("id"))
    this.userService.getUserById(id_user).subscribe(user => this.user = user)
    for (let fonction of this.fonctions) {
      console.log(fonction)
    }
  }

  changeMode() {
    if (this.mode==="Edit") {
      this.mode = "Display"
    } else {
      this.mode = "Edit"
    }
  }

  updateUser() {
    console.log("update")
    this.userService.update(this.user).subscribe(()=>this.changeMode());
  }

}
