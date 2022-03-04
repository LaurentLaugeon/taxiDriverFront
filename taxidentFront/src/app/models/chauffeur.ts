import { Agence } from "./agence";
import { Utilisateur } from "./utilisateur";
import { Vehicules } from "./vehicules";

export class Chauffeur extends Utilisateur{
    note!: number;
    agence!: Agence;
    vehicule!:Vehicules;
}
