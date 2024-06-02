import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';

const routes: Routes = [
  {
    'path' : '',
    'component' : DashboardComponent
  },
  {
    'path': 'dashboard',
    'loadChildren': () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    'path': 'zones',
    'loadChildren' : () => import('./modules/zone-management/zone-management.module').then(m => m.ZoneManagementModule)
  },
  {
    'path': 'administration',
    'loadChildren' : () => import('./modules/administration/administration.module').then(m => m.AdministrationModule)
  },
  {
    'path': 'settings',
    'loadChildren': () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    'path' : '**',
    'component': ErrorNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
