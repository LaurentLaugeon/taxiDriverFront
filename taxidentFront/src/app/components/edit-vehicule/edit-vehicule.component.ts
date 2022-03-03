import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicules } from 'src/app/models/vehicules';
import { ResponsableAgenceService } from 'src/app/services/responsable-agence.service';

@Component({
  selector: 'app-edit-vehicule',
  templateUrl: './edit-vehicule.component.html',
  styleUrls: ['./edit-vehicule.component.css']
})
export class EditVehiculeComponent implements OnInit {
  editForm : FormGroup;
  vehicule: Vehicules = new Vehicules();
  
  constructor(private router:Router, private responsableAgenceService : ResponsableAgenceService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    //recuperation de l'id
    let vehiculeId = localStorage.getItem("vehiculeId");
    if (!vehiculeId){
      //si pas de id => erreur
      alert("invalid Action");
      this.router.navigate(['/base/forms']);
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
      chauffeur:['',Validatogrs.required],
      agence:['',Validators.required]
    })
    //initialisation
    
  }

}
