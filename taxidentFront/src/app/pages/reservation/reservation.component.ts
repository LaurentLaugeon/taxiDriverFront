import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent implements OnInit {

  reservations: any;
  reservation: Reservation = new Reservation();
  chauffeurs:any; 


  constructor(private reservationService:ReservationService, private chauffeurService:ChauffeurService) { }

  ngOnInit(): void {
    this.findAll();
    this.loadChauffeurs();
  }

 findAll(){
    this.reservationService.findAll().subscribe(data => {this.reservations = data;}); 
  }
  loadChauffeurs(){
    this.chauffeurService.findAll().subscribe(data =>{this.chauffeurs = data;});
  }
  deleteResa(id:number){
    this.reservationService.delete(id).subscribe(()=>{this.findAll()})
  }
  save(){
    this.reservationService.save(this.reservation).subscribe(()=>{
        this.findAll();  
        this.reservation = new Reservation(); 
    })
  }

}
