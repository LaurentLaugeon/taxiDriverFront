import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations:any;
  reservation:Reservation = new Reservation();

  constructor(private reservationService:ReservationService) { }

  ngOnInit(): void {
    this.findAllReservations();
  }

  findAllReservations(){
    this.reservationService.findAllReservations().subscribe(data => {this.reservations = data;});
  }

  deleteReservation(id:number){
    this.reservationService.deleteReservation(id).subscribe(()=>{this.findAllReservations()});
  }
  save(){
    this.reservationService.save(this.reservation).subscribe(()=>{
      this.reservation = new Reservation();
    })
  }

}
