import { Adresse } from "./adresse";
import { Chauffeur } from "./chauffeur";
import { Offre } from "./offre";
import { Statistique } from "./statistique";
import { Utilisateur } from "./utilisateur";
import { Vehicules } from "./vehicules";

export class Agence {
    idAgence!:number;
    nomAgence!:string;
    adresse!:Adresse;
    responsableAgence!:Utilisateur;
    statistiques!:Statistique[];
    vehicules!:Vehicules[];
    offres!:Offre[];
    chauffeurs!:Chauffeur[];

}
