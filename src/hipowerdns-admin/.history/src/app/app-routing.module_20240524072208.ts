import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    'path' : '',
    'component' : DashboardComponent
  },
  {
    'path': 'login',
    'component': LoginComponent
  },
  {
    'path': 'zone-management',
    'loadChildren' : () => import('./modules/zone-management/zone-management.module').then(m => m.ZoneManagementModule)
  },
  {
    path: 'templates',
    loadChildren: () => import('./modules/zone-template/zone-template.module').then(m => m.ZoneTemplatesModule)
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
