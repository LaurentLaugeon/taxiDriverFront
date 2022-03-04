import { Chauffeur } from "./chauffeur";
import { Client } from "./client";

export class Reservation {
    idResa!: number;
    dateCreation!: Date;
    dateValidation!: Date;
    statut!: string;
    chauffeurs!: Chauffeur[];
    clients!: Client[];
}
