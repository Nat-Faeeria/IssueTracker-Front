import {User} from "./User";
import {Commentaire} from "./Commentaire";
import {Timestamp} from "rxjs";

export interface Issue {
  code: Number,
  title: String,
  content: String,
  emitter: Record<'nom' | 'url', string>[],
  commentaires: Record<'id' | 'url', string>[],
  dateCreated: Date,
  dateClosed: Date
}
