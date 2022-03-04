import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Administrateur } from 'src/app/models/administrateur';
import { Chauffeur } from 'src/app/models/chauffeur';
import { Client } from 'src/app/models/client';
import { ResponsableAgence } from 'src/app/models/responsable-agence';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AdministrateurService } from 'src/app/services/administrateur.service';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { ClientService } from 'src/app/services/client.service';
import { ResponsableAgenceService } from 'src/app/services/responsable-agence.service';

import { RoleService } from 'src/app/services/role.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  roles: any;
  agences:any;
  vehicules: any; 
  administrateurs:any;
  respos:any;
  chauffeurs:any;
  clients:any;

  administrateur : Administrateur = new Administrateur(); 
  client : Client = new Client();
  chauffeur : Chauffeur = new Chauffeur(); 
  respo : ResponsableAgence = new ResponsableAgence(); 
  utilisateur: Utilisateur = new Utilisateur(); // Utilisateur utilisateur=new Utilisateur() : JAVA

  constructor(private appService:AppService, private vehiculeService:VehiculeService, private utilisateurService:UtilisateurService, private administrateurService:AdministrateurService, private clientService:ClientService, private chuaffeurService:ChauffeurService, private responsableAgenceService:ResponsableAgenceService,private roleService:RoleService,private agenceService:ResponsableAgenceService, private router:Router) { } 
  ngOnInit(): void {
    this.findAllAdmin();
    this.findAllClient();
    this.findAllChauf();
    this.findAllRespo();
    this.loadRoles();
    this.loadAgences();
    this.loadVehicules();
  }
  
  loadRoles(){
    this.roleService.findAll().subscribe(data =>{this.roles = data;});
  }
  loadAgences(){
    this.agenceService.findAll().subscribe(data =>{this.agences = data;});
  }
  loadVehicules(){
    this.agenceService.findAll().subscribe(data =>{this.vehicules = data;});
  }

  // Afficher + formulaire administrateurs
  findAllAdmin(){
    this.utilisateurService.findAllAdmin().subscribe(data => {this.administrateurs = data; console.log("respo:"+this.respos)}); // data : objet qui stocke les données des utilisateurs
  }
  deleteAdmin(id:number){
    this.utilisateurService.deleteAdmin(id).subscribe(()=>{this.findAllAdmin()}) // () => {this.findAll()} 
  }

  saveAdmin(){  
    this.utilisateurService.saveAdmin(this.administrateur).subscribe(()=>{
        this.findAllAdmin();  // MAJ de la liste des utilisateurs
        this.administrateur = new Administrateur(); // Vider le formulaire
    })}

  // Afficher + formulaire client
  findAllClient(){
    this.utilisateurService.findAllClient().subscribe(data => {this.clients = data;}); // data : objet qui stocke les données des utilisateurs
  }
  deleteClient(id:number){
    this.utilisateurService.deleteClient(id).subscribe(()=>{this.findAllClient()}) // () => {this.findAll()} 
  }
  saveClient(){  
    this.utilisateurService.saveClient(this.client).subscribe(()=>{
        this.findAllClient();  // MAJ de la liste des utilisateurs
        this.client = new Client(); // Vider le formulaire
    })
  }


  // Afficher + formulaire Responsable agence
  findAllRespo(){
    this.utilisateurService.findAllRespo().subscribe(data => {this.respos = data; console.log("respo:"+this.respos)}); // data : objet qui stocke les données des utilisateurs
  }
  deleteRespo(id:number){
    this.utilisateurService.deleteRespo(id).subscribe(()=>{this.findAllRespo()}) // () => {this.findAll()} 
  }
  saveRespo(){  
    this.utilisateurService.saveRespo(this.respo).subscribe(()=>{
        this.findAllRespo();  // MAJ de la liste des utilisateurs
        this.respo = new ResponsableAgence(); // Vider le formulaire
    })
  }
 
   // Afficher + formulaire Chauffeur
   findAllChauf(){
    this.utilisateurService.findAllChauf().subscribe(data => {this.chauffeurs = data;}); // data : objet qui stocke les données des utilisateurs
  }
  deleteChauf(id:number){
    this.utilisateurService.deleteChauf(id).subscribe(()=>{this.findAllChauf()}) // () => {this.findAll()} 
  }
  saveChauf(){  
    this.utilisateurService.saveChauf(this.utilisateur).subscribe(()=>{
        this.findAllChauf();  // MAJ de la liste des utilisateurs
        this.chauffeur = new Chauffeur(); // Vider le formulaire

    });
  }

  authenticated(){
    return this.appService.authenticated;
  }
  
  authorities(){
    console.log("isAdmin = "+this.appService.isAdmin)
    if(this.appService.isAdmin==true){
      return false;
    }else{
      return true;
    }
  }
}
