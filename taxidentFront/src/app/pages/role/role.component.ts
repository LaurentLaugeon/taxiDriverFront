import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roles:any; 
  role:Role = new Role(); 

  constructor(private roleService:RoleService) { }

  ngOnInit(): void {
    this.findAll();
  }

 findAll(){
    this.roleService.findAll().subscribe(data => {this.roles = data;}); // data : objet qui stocke les données des utilisateurs
  }

  deleteRole(id:number){
    this.roleService.delete(id).subscribe(()=>{this.findAll()}) // () => {this.findAll()} 
  }
  save(){
    // On utilise la fonction save
    // MAJ de la liste des utilisateurs dans la page web
    // Vider le formulaire  
    this.roleService.save(this.role).subscribe(()=>{
        this.findAll();  // MAJ de la liste des utilisateurs
        this.role = new Role(); // Vider le formulaire
    })
  }
}
