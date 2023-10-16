import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import {HttpClientModule} from "@angular/common/http";
import { UserListComponent } from './user/user-list/user-list.component';
import { UserBlockComponent } from './user/user-block/user-block.component';
import { CommentaireListComponent } from './commentaire/commentaire-list/commentaire-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    UserBlockComponent,
    CommentaireListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
