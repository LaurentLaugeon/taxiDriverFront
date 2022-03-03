import { Role } from "./role";

import { Adresse } from "./adresse";


export class Utilisateur {
    
    idUtilisateur!: number;
    nom!: string;
    prenom!: string;
    username!: string;
    password!: string;
    email!: string;
    roles!: Role[];
    // reservations!: Reservation[];


}

