import {Fonction} from "./Fonction";
import {Commentaire} from "./Commentaire";

export interface User {
  id: Number,
  nom: String,
  fonction: Fonction,
  commentairesEcrits: Record<'id' | 'url', string>[]
}
