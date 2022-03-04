import { Agence } from "./agence";

export class Offre {
    idOffre!:number;
    libelle!:string;
    nbVoyFree!:number;
    agence!:Agence;
}
