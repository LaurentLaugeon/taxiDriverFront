import { Agence } from "./agence";
import { Utilisateur } from "./utilisateur";

export class ResponsableAgence extends Utilisateur{
    agence!: Agence[];
}
