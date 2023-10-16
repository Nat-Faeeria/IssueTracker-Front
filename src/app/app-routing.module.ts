import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {CommentaireListComponent} from "./commentaire/commentaire-list/commentaire-list.component";

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: "users/:id", component: UserDetailsComponent },
  { path: "issues", component: UserDetailsComponent },
  { path: "issues/:code", component: UserDetailsComponent },
  { path: "commentaires", component: CommentaireListComponent },
  { path: "commentaires/:id", component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
