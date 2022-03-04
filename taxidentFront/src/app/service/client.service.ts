import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private chauffeursURL="http://localhost:7070/client/chauffeurs";
  private agencesURL="http://localhost:7070/client/agences";
  private statistiquesURL="http://localhost:7070/client/statistiques";

  constructor(private httpClient:HttpClient) { }
  public findAllChauffeurs() : Observable<any>{
    return this.httpClient.get(this.chauffeursURL);
  }
  
  public findAllAgences() : Observable<any> {
    return this.httpClient.get(this.agencesURL);
  }

  public findAllStatistiques() : Observable<any> {
    return this.httpClient.get(this.statistiquesURL);
  }
}
