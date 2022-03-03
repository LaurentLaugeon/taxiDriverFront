import { Component, OnInit } from '@angular/core';
import { Chauffeur } from 'src/app/models/chauffeur';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  chauffeurs: any;
  chauffeur:Chauffeur = new Chauffeur();
  
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.clientService.findAll().subscribe(data => {this.chauffeurs = data;});
    console.log(this.chauffeurs);
  }

}
