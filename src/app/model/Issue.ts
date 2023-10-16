import {User} from "./User";
import {Commentaire} from "./Commentaire";
import {Timestamp} from "rxjs";

export interface Issue {
  code: Number,
  title: String,
  content: String,
  emitter: User,
  commentaires: Commentaire[],
  dateCreated: Date,
  dateClosed: Date
}
