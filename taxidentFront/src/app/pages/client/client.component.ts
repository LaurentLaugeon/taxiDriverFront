import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  chauffeurs:any;
  
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.clientService.findAll().subscribe(data => {this.chauffeurs = data;});
  }

}
