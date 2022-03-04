import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  private baseURL="http://localhost:7070/vehicules";

  constructor(private httpClient:HttpClient) { }

  public findOne(id:number) : Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);  
  }

}
