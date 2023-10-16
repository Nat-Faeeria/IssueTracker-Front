import { Component } from '@angular/core';
import {CommentaireService} from "../../services/commentaire.service";
import {Commentaire} from "../../model/Commentaire";

@Component({
  selector: 'app-commentaire-list',
  templateUrl: './commentaire-list.component.html',
  styleUrls: ['./commentaire-list.component.css']
})
export class CommentaireListComponent {

  commentaires: Commentaire[]

  constructor(
    private commmentaireService: CommentaireService
  ) {
    this.commentaires = [];
    commmentaireService.getCommentaires().subscribe(coms => this.commentaires=coms)
  }
}
