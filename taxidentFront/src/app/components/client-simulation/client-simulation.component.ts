import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-simulation',
  templateUrl: './client-simulation.component.html',
  styleUrls: ['./client-simulation.component.css']
})
export class ClientSimulationComponent implements OnInit {
  date : any;
  villeDep : any;
  villeArr : any;
  distance : any;
  prix : any;

  constructor() { }

  ngOnInit(): void {
  }
  calculerTrajet(){
    this.prix = (this.distance *(5/100*1.8 + 0.1 + 2)).toFixed(2); //conso 5 L/100 + 1.8 €/L + 10ct/km pour peage + 2€/km pour chauffeur
  }
}
