import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseURL="http://localhost:7070/administrateur"; 
  /*private baseURLAdmin="http://localhost:7070/administrateurs"; 
  private baseURLChauffeur="http://localhost:7070/chauffeurs"; 
  private baseURLClient="http://localhost:7070/clients"; 
  private baseURLRespoAg="http://localhost:7070/responsableAgence"; */

  constructor(private httpClient:HttpClient) { }

  public findAllAdmin() : Observable<any>{
    return this.httpClient.get(this.baseURL);  
  }
  public deleteAdmin(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/supprimerCompte/"+id); 
  }
  public saveAdmin(user:any):Observable<any>{
    return this.httpClient.post(this.baseURL+"/ajouterCompte",user);
  }
  public updateAdmin(utilisateur:any):Observable<any>{
    var userParse = JSON.parse(utilisateur); 
    return this.httpClient.put(this.baseURL+"/updateCompte/"+userParse.idUtilisateur, userParse); 
 }


 public findAllClient() : Observable<any>{
  return this.httpClient.get(this.baseURL+"/clients");  
}
public deleteClient(id:number):Observable<any>{
  return this.httpClient.delete(this.baseURL+"/client/supprimerCompte/"+id); 
}
public saveClient(user:any):Observable<any>{
  return this.httpClient.post(this.baseURL+"/client/ajouterCompte",user);
}
public updateClient(utilisateur:any):Observable<any>{
  var userParse = JSON.parse(utilisateur); 
  return this.httpClient.put(this.baseURL+"/client/updateCompte/"+userParse.idUtilisateur, userParse); 
}


public findAllRespo() : Observable<any>{
  return this.httpClient.get(this.baseURL+"/respoAgences");  
}
public deleteRespo(id:number):Observable<any>{
  return this.httpClient.delete(this.baseURL+"/respoAgence/supprimerCompte/"+id); 
}
public saveRespo(user:any):Observable<any>{
  return this.httpClient.post(this.baseURL+"/respoAgence/ajouterCompte",user);
}
public updateRespo(utilisateur:any):Observable<any>{
  var userParse = JSON.parse(utilisateur); 
  return this.httpClient.put(this.baseURL+"/respoAgence/updateCompte/"+userParse.idUtilisateur, userParse); 
}


public findAllChauf() : Observable<any>{
  return this.httpClient.get(this.baseURL+"/chauffeurs");  
}
public deleteChauf(id:number):Observable<any>{
  return this.httpClient.delete(this.baseURL+"/chauffeurs/supprimerCompte/"+id); 
}
public saveChauf(user:any):Observable<any>{
  return this.httpClient.post(this.baseURL+"/chauffeurs/ajouterCompte",user);
}
public updateChauf(utilisateur:any):Observable<any>{
  var userParse = JSON.parse(utilisateur); 
  return this.httpClient.put(this.baseURL+"/chauffeurs/updateCompte/"+userParse.idUtilisateur, userParse); 
}

}
