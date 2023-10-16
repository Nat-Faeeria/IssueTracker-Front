import {Issue} from "./Issue";
import {User} from "./User";

export interface Commentaire {
  id: Number,
  author: Record<'nom' | 'url', string>,
  issue: Record<'title' | 'url', string>,
  contenu: String
}
