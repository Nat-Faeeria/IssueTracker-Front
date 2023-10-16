import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import {HttpClientModule} from "@angular/common/http";
import { UserListComponent } from './user/user-list/user-list.component';
import { UserBlockComponent } from './user/user-block/user-block.component';
import { CommentaireListComponent } from './commentaire/commentaire-list/commentaire-list.component';
import { AppRoutingModule } from './app-routing.module';
import { IssueListComponent } from './issue/issue-list/issue-list.component';
import { IssueDetailsComponent } from './issue/issue-details/issue-details.component';
import { CommentaireDetailsComponent } from './commentaire/commentaire-details/commentaire-details.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    UserBlockComponent,
    CommentaireListComponent,
    IssueListComponent,
    IssueDetailsComponent,
    CommentaireDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
