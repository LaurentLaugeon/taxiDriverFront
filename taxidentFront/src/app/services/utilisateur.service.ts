import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseURL="http://localhost:7070/utilisateurs"; 
  /*private baseURLAdmin="http://localhost:7070/administrateurs"; 
  private baseURLChauffeur="http://localhost:7070/chauffeurs"; 
  private baseURLClient="http://localhost:7070/clients"; 
  private baseURLRespoAg="http://localhost:7070/responsableAgence"; */

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);  
  }
  
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); 
  }

  public save(user:any):Observable<any>{
    return this.httpClient.post(this.baseURL,user);
  }

  public update(utilisateur:any):Observable<any>{
    var userParse = JSON.parse(utilisateur); // traduire les donnees format text en format JSON 
    return this.httpClient.put(this.baseURL+"/"+userParse.idUtilisateur, userParse); // Methode PUT 
 }
}
