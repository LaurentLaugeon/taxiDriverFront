import { Component, OnInit } from '@angular/core';
import { ResponsableAgenceService } from 'src/app/services/responsable-agence.service';

@Component({
  selector: 'app-voitures-respo',
  templateUrl: './voitures-respo.component.html',
  styleUrls: ['./voitures-respo.component.css']
})
export class VoituresRespoComponent implements OnInit {

  voitures : any;
  
  constructor(private respoAgenceService : ResponsableAgenceService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    //mettre id du responsable d'agence connecte
    this.respoAgenceService.findAllVehiculeByAgence(1).subscribe(data => {this.voitures = data;});
  }

}
