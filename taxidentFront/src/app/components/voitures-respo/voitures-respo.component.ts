import { Component, OnInit } from '@angular/core';
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

  constructor(private respoAgenceService : ResponsableAgenceService, private router:Router) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    //mettre id du responsable d'agence connecte
    this.respoAgenceService.findAllVehiculeByAgence(1).subscribe(data => {this.voitures = data;});
  }
  deleteVehicule(id:number){
    this.respoAgenceService.deleteVehicule(id).subscribe(()=>{this.findAll()});
  }
  saveVehicule(id:number){
    this.respoAgenceService.saveVehicule(this.voiture).subscribe(()=>{
      this.findAll();
      this.voiture = new Vehicules();
    });
  }
  editVehicule(voit:Vehicules){
    localStorage.removeItem("vehiculeId");
    localStorage.setItem("vehiculeId",voit.idVehicule.toString());
    this.router.navigate(['/components/editVehicule',voit.idVehicule]);
  }
}
