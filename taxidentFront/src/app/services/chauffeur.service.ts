import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {

  private baseURL="http://localhost:7070/chauffeur";

  constructor(private httpClient:HttpClient) { }

  // Affichage de la note du chauffeur
  public affichageNote(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  // Afficher son planning du jour
  public affichagePlanning(idC:number, idP:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/planning/"+idC+idP);
  }

  // Afficher les avis des clients

  public affichageAvisClient(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/avisClient"+id);
  }

}
