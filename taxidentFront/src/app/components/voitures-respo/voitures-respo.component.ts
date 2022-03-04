import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicules } from 'src/app/models/vehicules';
import { ResponsableAgenceService } from 'src/app/services/responsable-agence.service';

@Component({
  selector: 'app-voitures-respo',
  templateUrl: './voitures-respo.component.html',
  styleUrls: ['./voitures-respo.component.css']
})
export class VoituresRespoComponent implements OnInit {

  voitures : any;
  voiture : Vehicules = new Vehicules();
  chauffeurs: any;
  agences : any;
  saveForm : FormGroup;

  constructor(private respoAgenceService : ResponsableAgenceService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.findAll();
    this.loadAgences();
    this.loadChauffeurs();
    this.voiture = new Vehicules()
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
    this.respoAgenceService.findAllVehiculeByAgence(1).subscribe(data => {this.voitures = data;});
  }
  loadChauffeurs(){
    this.respoAgenceService.findAllChauffeurByAgence(1).subscribe(data =>{this.chauffeurs = data});
  }
  loadAgences(){
    this.respoAgenceService.findAllAgence().subscribe(data =>{this.agences = data});
  }
  deleteVehicule(id:number){
    this.respoAgenceService.deleteVehicule(id).subscribe(()=>{this.findAll()});
  }
  saveVehicule(){
    this.respoAgenceService.saveVehicule(this.voiture).subscribe(()=>{
      this.ngOnInit()
    });
  }
  editVehicule(id:number){
    localStorage.removeItem("vehiculeId");
    localStorage.setItem("vehiculeId",id.toString());
    this.router.navigate(["editVehicule",id]);
  }
}
