import { Role } from "./role";

import { Adresse } from "./adresse";
import { Agence } from "./agence";
import { Vehicules } from "./vehicules";


export class Utilisateur {
    
    idUtilisateur!: number;
    nom!: string;
    prenom!: string;
    username!: string;
    password!: string;
    email!: string;
    roles!: Role[];
    adresse!: Adresse[]; 
    // reservations!: Reservation[];


}

