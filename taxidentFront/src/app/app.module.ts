import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injectable, NgModule } from '@angular/core';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { RoleComponent } from './pages/role/role.component';

import { ClientComponent } from './pages/client/client.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { AdministrateurComponent } from './pages/administrateur/administrateur.component';

import { ReservationService } from './services/reservation.service';
import { ResponsableAgenceService } from './services/responsable-agence.service';
import { ClientService } from './services/client.service';
import { RoleService } from './services/role.service';
import { UtilisateurService } from './services/utilisateur.service';
import { ChauffeurService } from './services/chauffeur.service';
import { AppService } from './app.service';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
intercept(req:HttpRequest<any>, next: HttpHandler){
  const xhr=req.clone({
    headers: req.headers.set('X-Requested-With','XMLHttpRequest')
  });
  return next.handle(xhr);
}
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    RoleComponent,
    AdministrateurComponent,
    ReservationComponent


  ],
  providers: [
    ReservationService,
    ChauffeurService,
    ResponsableAgenceService,
    ClientService,
    RoleService,
    UtilisateurService,
    AppService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
