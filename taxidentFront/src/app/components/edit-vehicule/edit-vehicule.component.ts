import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicules } from 'src/app/models/vehicules';
import { ResponsableAgenceService } from 'src/app/services/responsable-agence.service';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-edit-vehicule',
  templateUrl: './edit-vehicule.component.html',
  styleUrls: ['./edit-vehicule.component.css']
})
export class EditVehiculeComponent implements OnInit {
  editForm : FormGroup;
  vehicule: Vehicules = new Vehicules();
  chauffeurs: any;
  constructor(private router:Router, private responsableAgenceService : ResponsableAgenceService, private formBuilder:FormBuilder, private vehiculeService: VehiculeService) { }

  ngOnInit(): void {
    //recuperation de l'id
    let vehiculeId = localStorage.getItem("vehiculeId");
    if (!vehiculeId){
      //si pas de id => erreur
      alert("invalid Action");
      this.router.navigate(['voitures-respo']);
      return;
    }
    //obligations du formulaire
    this.editForm=this.formBuilder.group({
      idVehicule:[],
      model:['',Validators.required],
      immatriculation:['',Validators.required],
      conso:['',Validators.required],
      nbPlace:['',Validators.required],
      capaciteCoffre:['',Validators.required],
      chauffeur:['',Validators.required],
      agence:['',Validators.required]
    })
    
    //initialisation
    this.vehiculeService.findOne(+vehiculeId).subscribe(data => {this.editForm.setValue(data)})
    
    this.loadChauffeurs();
  }
  loadChauffeurs(){
    this.responsableAgenceService.findAllChauffeurByAgence(1).subscribe(data =>{this.chauffeurs = data});
  }
  updateVehicule(){
    var varJson=JSON.stringify(this.editForm.value); // conversion en text json pour la method post
    this.responsableAgenceService.updateVehicule(varJson).subscribe(()=>{this.router.navigate(['voitures-respo'])})
  }
}
