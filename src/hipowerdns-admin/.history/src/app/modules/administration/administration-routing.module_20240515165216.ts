import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes  = [
  {
    'path': 'servers',
    'loadChildren': () => import('./servers/servers.module').then(m => m.ServersModule)
  },
  {
    'path': 'zones',
    'loadChildren': () => import('./zones/zones.module').then(m => m.ZonesModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdministrationRoutingModule { }
