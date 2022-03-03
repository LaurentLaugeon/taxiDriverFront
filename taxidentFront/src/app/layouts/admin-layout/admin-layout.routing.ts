import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UtilisateurComponent } from 'src/app/pages/utilisateur/utilisateur.component';
import { RoleComponent } from 'src/app/pages/role/role.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'roles',   component: RoleComponent },
    { path: 'utilisateur',   component: UtilisateurComponent }
    
    /*{ path: 'Dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }*/
];
