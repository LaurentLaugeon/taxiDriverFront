import { Agence } from "./agence";
import { Utilisateur } from "./utilisateur";

export class Chauffeur extends Utilisateur{
    note!: number;
    agence!: Agence;
}
