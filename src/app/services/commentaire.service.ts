import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commentaire} from "../model/Commentaire";

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private url = "http://localhost:8080/commentaires"
  constructor(
    private http: HttpClient
  ) {}

  getCommentaires(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(this.url);
  }
}
