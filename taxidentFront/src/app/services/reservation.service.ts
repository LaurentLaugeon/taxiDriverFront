import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseURL="http://localhost:7070/reservation";
  
  constructor(private httpClient:HttpClient) { }
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);  
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); 
  }
  public save(reservation:any):Observable<any>{
    return this.httpClient.post(this.baseURL,reservation);
  }
  public update(reservation:any):Observable<any>{
    var resaParse = JSON.parse(reservation); // traduire les donnees format text en format JSON 
    return this.httpClient.put(this.baseURL+"/"+resaParse.idResa, resaParse); // Methode PUT 
 }
}
