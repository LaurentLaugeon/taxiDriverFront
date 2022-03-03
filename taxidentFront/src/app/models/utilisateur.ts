import { Role } from "./role";
import { Adresse } from "./adresse";

export class Utilisateur {
    idUtilisateur!:number; 
    nom!:String; 
    prenom!:String;
    username!:String;
    password!:String;
    email!:String;
    note!:number;
    pointsFidelite!:number;
    adresse!:Adresse[];
    role!:Role[]; 
}