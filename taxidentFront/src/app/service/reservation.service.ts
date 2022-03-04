import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservationURL="http://localhost:7070/client/reservation";
  private reservationsURL="http://localhost:7070/reservation";
  private delResURL="http://localhost:7070/reservation";

  constructor(private httpClient:HttpClient) { }
  public save(reservation:any):Observable<any>{
    return this.httpClient.post(this.reservationURL, reservation);
  }
  public findAllReservations() : Observable<any>{
    return this.httpClient.get(this.reservationsURL);
  }
  public deleteReservation(id:number):Observable<any>{
    return this.httpClient.delete(this.delResURL+"/"+id);
  }
    
}
