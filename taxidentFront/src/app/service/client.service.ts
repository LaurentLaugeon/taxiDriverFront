import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseURL="http://localhost:7070/client/chauffeurs";

  constructor(private httpClient:HttpClient) { }
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
}
