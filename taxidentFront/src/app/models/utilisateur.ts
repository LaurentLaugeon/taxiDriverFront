import { Adresse } from "./adresse";
import { Role } from "./role";


export abstract class Utilisateur {
    idUtilisateur!:number;
    nom!:string;
    prenom!:string;
    username!:string;
    password!:string;
    email!:string;
    adresse!:Adresse;
    roles!:Role[];
}
