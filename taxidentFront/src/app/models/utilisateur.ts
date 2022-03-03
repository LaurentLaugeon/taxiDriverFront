import { Role } from "./role";

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
