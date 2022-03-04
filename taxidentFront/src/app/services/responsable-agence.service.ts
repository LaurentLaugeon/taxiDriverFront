import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsableAgenceService {
  private baseURL="http://localhost:7070/respoAgence";

  constructor(private httpClient : HttpClient) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseURL); // recupere la liste des responsables d'agence
  }
  
  //recupere les statistiques d'une agence
  public findAllStatByAgence(id:number): Observable<any> {
    return this.httpClient.get(this.baseURL+"/statistiques/"+id);
  }

  //recupere les agence 
  public findAllAgence(): Observable<any> {
    return this.httpClient.get(this.baseURL+"/agences");
  }

  //recupere les chauffeurs d'une agence
  public findAllChauffeurByAgence(id:number): Observable<any> {
    return this.httpClient.get(this.baseURL+"/chauffeurs/"+id);
  }
  
  //recupere les vehicules d'une agence
  public findAllVehiculeByAgence(id:number): Observable<any> {
    return this.httpClient.get(this.baseURL+"/vehicules/"+id);
  }

  //recupere les reclamations d'une agence
  public findAllReclamationByAgence(id:number): Observable<any> {
    return this.httpClient.get(this.baseURL+"/reclamations/"+id);
  }

  //recupere les offres d'une agence
  public findAllOffreByAgence(id:number): Observable<any> {
    return this.httpClient.get(this.baseURL+"/offres/"+id);
  }

  //recupere les reservations d'une agence
  public findAllReservationByAgence(id:number): Observable<any> {
    return this.httpClient.get(this.baseURL+"/reservations/"+id);
  }

  //save un chauffeur
  public saveChauffeur(chauffeur:any): Observable<any> {
    return this.httpClient.post(this.baseURL+"/saveChauffeur/",chauffeur);
  }

  //save un vehicule
  public saveVehicule(vehicule:any): Observable<any> {
    return this.httpClient.post(this.baseURL+"/saveVehicule/",vehicule);
  }

  //save un offre
  public saveOffre(offre:any): Observable<any> {
    return this.httpClient.post(this.baseURL+"/saveOffre/",offre);
  }

  //maj chauffeur
  public updateChauffeur(chauffeur:any): Observable<any> {
    var chauffeurParse = JSON.parse(chauffeur);
    return this.httpClient.put(this.baseURL+"/chauffeurs/"+chauffeurParse.idUtilisateur,chauffeurParse);
  }

  //maj vehicule
  public updateVehicule(vehicule:any): Observable<any> {
    var vehiculeParse = JSON.parse(vehicule);
    return this.httpClient.put(this.baseURL+"/vehicules/"+vehiculeParse.idVehicule,vehiculeParse);
  }

  //maj reclamation
  public updateReclamation(reclamation:any): Observable<any> {
    var reclamationParse = JSON.parse(reclamation);
    return this.httpClient.put(this.baseURL+"/reclamations/"+reclamationParse.idReclamation,reclamationParse);
  }

  //maj offre
  public updateOffre(offre:any): Observable<any> {
    var offreParse = JSON.parse(offre);
    return this.httpClient.put(this.baseURL+"/offres/"+offreParse.idOffre,offreParse);
  }

  //maj devis
  public updateDevis(devis:any): Observable<any> {
    var devisParse = JSON.parse(devis);
    return this.httpClient.put(this.baseURL+"/devis/"+devisParse.idDevis,devisParse);
  }

  //maj factures
  public updatefacture(facture:any): Observable<any> {
    var factureParse = JSON.parse(facture);
    return this.httpClient.put(this.baseURL+"/factures/"+factureParse.idFacture,factureParse);
  }

  //Supprimer un chauffeur
  public deleteChauffeur(id:number): Observable<any> {
    return this.httpClient.delete(this.baseURL+"/chauffeurs/"+id);
  }

  //Supprimer un vehicule
  public deleteVehicule(id:number): Observable<any> {
    return this.httpClient.delete(this.baseURL+"/vehicules/"+id);
  }

  //Supprimer un reclamation
  public deleteReclamation(id:number): Observable<any> {
    return this.httpClient.delete(this.baseURL+"/reclamations/"+id);
  }

  //Supprimer un offre
  public deleteOffre(id:number): Observable<any> {
    return this.httpClient.delete(this.baseURL+"/offres/"+id);
  }

  //Supprimer un reservation
  public deleteReservation(id:number): Observable<any> {
    return this.httpClient.delete(this.baseURL+"/reservations/"+id);
  }

}
