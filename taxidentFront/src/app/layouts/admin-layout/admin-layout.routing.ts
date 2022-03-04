import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UtilisateurComponent } from 'src/app/pages/utilisateur/utilisateur.component';
import { RoleComponent } from 'src/app/pages/role/role.component';
import { ClientComponent } from 'src/app/pages/client/client.component';
import { ReservationComponent } from 'src/app/pages/reservation/reservation.component';
import { VoituresRespoComponent } from 'src/app/components/voitures-respo/voitures-respo.component';
import { EditVehiculeComponent } from 'src/app/components/edit-vehicule/edit-vehicule.component';
import { ChauffeursRespoComponent } from 'src/app/components/chauffeurs-respo/chauffeurs-respo.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'roles',            component: RoleComponent },
    { path: 'utilisateur',      component: UtilisateurComponent },
    { path: 'voitures-respo',   component: VoituresRespoComponent },
    { path: 'chauffeurs-respo', component: ChauffeursRespoComponent },
    { path: 'editVehicule/:id', component: EditVehiculeComponent },
    { path: 'client',           component: ClientComponent },
    { path: 'reservation',      component: ReservationComponent },
    { path: 'dashboard',        component: DashboardComponent },
    { path: 'user-profile',     component: UserProfileComponent },
    { path: 'tables',           component: TablesComponent },
    { path: 'icons',            component: IconsComponent },
    { path: 'maps',             component: MapsComponent }
];
