import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {

  private baseURL="http://localhost:7070/utilisateurs"; 
  
  constructor(private httpClient:HttpClient) { }
}
