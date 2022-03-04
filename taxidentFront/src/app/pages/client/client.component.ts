import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  chauffeurs:any;
  agences:any;
  statistiques:any;
  
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.findAllChauffeurs();
    this.findAllAgences();
    this.findAllStatistiques();
  }

  findAllChauffeurs(){
    this.clientService.findAllChauffeurs().subscribe(data => {this.chauffeurs = data;});
  }

  findAllAgences(){
    this.clientService.findAllAgences().subscribe(data => {this.agences = data;});
  }

  findAllStatistiques(){
    this.clientService.findAllStatistiques().subscribe(data => {this.statistiques = data;});
  }

}
