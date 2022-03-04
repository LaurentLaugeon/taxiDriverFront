import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { VoituresRespoComponent } from './voitures-respo/voitures-respo.component';
import { EditVehiculeComponent } from './edit-vehicule/edit-vehicule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChauffeursRespoComponent } from './chauffeurs-respo/chauffeurs-respo.component';
import { UtilisateurComponent } from '../pages/utilisateur/utilisateur.component';
import { ClientComponent } from '../pages/client/client.component';
import { ClientSimulationComponent } from './client-simulation/client-simulation.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UtilisateurComponent,
    ChauffeurComponent,
    VoituresRespoComponent,
    EditVehiculeComponent,
    ChauffeursRespoComponent,
    ClientSimulationComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
