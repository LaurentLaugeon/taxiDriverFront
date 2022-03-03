import { Agence } from "./agence";
import { Utilisateur } from "./utilisateur";

export class Vehicules {
    idVehicule!: number;
    model!: string;
    immatriculation!: string;
    conso!: number;
    nbPlace!: number;
    capaciteCoffre!: number;
    chauffeur!: Utilisateur;
    agence!: Agence;
}
