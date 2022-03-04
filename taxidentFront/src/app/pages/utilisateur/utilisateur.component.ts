import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Utilisateur } from 'src/app/models/utilisateur';
import { RoleService } from 'src/app/service/role.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  utilisateurs: any;   //utilisateurs: Utilisateur[] 
  roles: any;         // roles: Role[]
  utilisateur: Utilisateur = new Utilisateur(); // Utilisateur utilisateur=new Utilisateur() : JAVA

  constructor(private appService:AppService, private utilisateurService:UtilisateurService,private roleService:RoleService, private router:Router) { } 
  ngOnInit(): void {
    this.findAll();
    this.loadRoles();
  }
  findAll(){
    this.utilisateurService.findAll().subscribe(data => {this.utilisateurs = data;}); // data : objet qui stocke les données des utilisateurs
  }
  loadRoles(){
    this.roleService.findAll().subscribe(data =>{this.roles = data;});
  }

  deleteUtilisateur(id:number){
    this.utilisateurService.delete(id).subscribe(()=>{this.findAll()}) // () => {this.findAll()} 
  }
  save(){
    this.utilisateurService.save(this.utilisateur).subscribe(()=>{
        this.findAll();
        this.utilisateur = new Utilisateur();
    })
  }

  editUtilisateur(utilisateur:Utilisateur){
    localStorage.removeItem("editUtilisateurId");
    localStorage.setItem("editUtilisateurId", utilisateur.idUtilisateur.toString()); 
    this.router.navigate(['/base/editUtilisateur',utilisateur.idUtilisateur]); 
  }
  authenticated(){
    return this.appService.authenticated;
  }
  authorities(){
    console.log("isAdmin = "+this.appService.isAdmin)
    if(this.appService.isAdmin==true){
      return false;
    }else{
      return true;
    }
  }
}
