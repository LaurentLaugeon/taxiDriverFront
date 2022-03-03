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

 /*
  public findAllAdmin() : Observable<any>{
    return this.httpClient.get(this.baseURLAdmin);  
  }
  
  public deleteAdmin(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURLAdmin+"/"+id); 
  }

  public saveAdmin(user:any):Observable<any>{
    return this.httpClient.post(this.baseURLAdmin,user);
  }

  public updateAdmin(utilisateur:any):Observable<any>{
    var userParse = JSON.parse(utilisateur); // traduire les donnees format text en format JSON 
    return this.httpClient.put(this.baseURLAdmin+"/"+userParse.idUtilisateur, userParse); // Methode PUT 
 }

 public findAllChauffeur() : Observable<any>{
  return this.httpClient.get(this.baseURLChauffeur);  
}

public deleteChauffeur(id:number):Observable<any>{
  return this.httpClient.delete(this.baseURLChauffeur+"/"+id); 
}

public saveChauffeur(user:any):Observable<any>{
  return this.httpClient.post(this.baseURLChauffeur,user);
}

public updateChauffeur(utilisateur:any):Observable<any>{
  var userParse = JSON.parse(utilisateur); // traduire les donnees format text en format JSON 
  return this.httpClient.put(this.baseURLChauffeur+"/"+userParse.idUtilisateur, userParse); // Methode PUT 
}

public findAllClient() : Observable<any>{
  return this.httpClient.get(this.baseURLClient);  
}

public deleteClient(id:number):Observable<any>{
  return this.httpClient.delete(this.baseURLClient+"/"+id); 
}

public saveClient(user:any):Observable<any>{
  return this.httpClient.post(this.baseURLClient,user);
}

public updateClient(utilisateur:any):Observable<any>{
  var userParse = JSON.parse(utilisateur); // traduire les donnees format text en format JSON 
  return this.httpClient.put(this.baseURLClient+"/"+userParse.idUtilisateur, userParse); // Methode PUT 
}

public findAllRespoAg() : Observable<any>{
  return this.httpClient.get(this.baseURLRespoAg);  
}

public deleteRespoAg(id:number):Observable<any>{
  return this.httpClient.delete(this.baseURLRespoAg+"/"+id); 
}

public saveRespoAg(user:any):Observable<any>{
  return this.httpClient.post(this.baseURLRespoAg,user);
}

public updateRespoAg(utilisateur:any):Observable<any>{
  var userParse = JSON.parse(utilisateur); // traduire les donnees format text en format JSON 
  return this.httpClient.put(this.baseURLRespoAg+"/"+userParse.idUtilisateur, userParse); // Methode PUT 
}*/
}
