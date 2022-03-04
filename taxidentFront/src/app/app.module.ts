import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
import { EditAdminComponent } from './pages/edit-admin/edit-admin.component';
import { EditClientComponent } from './pages/edit-client/edit-client.component';
import { EditChaufComponent } from './pages/edit-chauf/edit-chauf.component';
import { EditRespoComponent } from './pages/edit-respo/edit-respo.component';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,

    RoleComponent,

    ReservationComponent,
      AdministrateurComponent,
      EditAdminComponent,
      EditClientComponent,
      EditChaufComponent,
      EditRespoComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
