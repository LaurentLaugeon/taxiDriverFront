import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chauffeur } from 'src/app/models/chauffeur';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ResponsableAgenceService } from 'src/app/services/responsable-agence.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-chauffeurs-respo',
  templateUrl: './chauffeurs-respo.component.html',
  styleUrls: ['./chauffeurs-respo.component.css']
})
export class ChauffeursRespoComponent implements OnInit {
  chauffeurs : any;
  chauffeur : Chauffeur = new Chauffeur();
  agences : any;
  saveForm : FormGroup;
  vehicules : any;
  roles:any;

  constructor(private respoAgenceService : ResponsableAgenceService, private router:Router, private formBuilder:FormBuilder, private roleService:RoleService) { }

  ngOnInit(): void {
    this.findAll();
    this.loadAgences();
    this.loadRoles();
    this.loadVehicules()
    this.chauffeur = new Chauffeur()
    //obligations du formulaire
    this.saveForm=this.formBuilder.group({
      idVehicule:[],
      model:['',Validators.required],
      immatriculation:['',Validators.required],
      conso:['',Validators.required],
      nbPlace:['',Validators.required],
      capaciteCoffre:['',Validators.required],
      chauffeur:['',Validators.required],
      agence:['',Validators.required]
    })
  }
  findAll(){
    //mettre id du responsable d'agence connecte
    this.respoAgenceService.findAllChauffeurByAgence(1).subscribe(data => {this.chauffeurs = data;});
  }
  loadAgences(){
    this.respoAgenceService.findAllAgence().subscribe(data =>{this.agences = data});
  }
  loadVehicules(){
    //mettre id du responsable d'agence connecte
    this.respoAgenceService.findAllVehiculeByAgence(1).subscribe(data => {this.vehicules = data;});
  }
  loadRoles(){
    //mettre id du responsable d'agence connecte
    this.roleService.findAll().subscribe(data => {this.roles = data;});
  }
  deleteChauffeur(id:number){
    this.respoAgenceService.deleteChauffeur(id).subscribe(()=>{this.findAll()});
  }
  saveChauffeur(){
    this.respoAgenceService.saveChauffeur(this.chauffeur).subscribe(()=>{
      this.ngOnInit();
    });
  }
  editChauffeur(id:number){
    localStorage.removeItem("chauffeurId");
    localStorage.setItem("chauffeurId",id.toString());
    this.router.navigate(["editChauffeurRespo",id]);
  }
}
