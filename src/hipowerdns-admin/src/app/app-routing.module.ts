import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    'path': 'dashboard',
    'loadChildren': () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },  
  {
    'path': 'administration',
    'loadChildren' : () => import('./modules/administration/administration.module').then(m => m.AdministrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
