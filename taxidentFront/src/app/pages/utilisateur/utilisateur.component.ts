import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Utilisateur } from 'src/app/models/utilisateur';
import { RoleService } from 'src/app/services/role.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

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
    // On utilise la fonction save
    // MAJ de la liste des utilisateurs dans la page web
    // Vider le formulaire  
    this.utilisateurService.save(this.utilisateur).subscribe(()=>{
        this.findAll();  // MAJ de la liste des utilisateurs
        this.utilisateur = new Utilisateur(); // Vider le formulaire
    })
  }

  editUtilisateur(utilisateur:Utilisateur){
    // 1. Crer une variable locale
    // 2. stocker cette variable dans le cache du navigateur(localStorage)
    localStorage.removeItem("editUtilisateurId");
    localStorage.setItem("editUtilisateurId", utilisateur.idUtilisateur.toString()); // editUserId va avoir la valeur de l'id qu'on va selecitonner

    this.router.navigate(['/base/editUtilisateur',utilisateur.idUtilisateur]); //localhos:4200/#/base/editUser/5 
    // On va avoir une navigation entre le composant forms.component.ts --> edit-user.component.ts
    // edit-user.component.ts : Affichage d'un formulaire avec des données remplit + MAJ des donnees et la redirection vers forms.component.ts

  }
}
