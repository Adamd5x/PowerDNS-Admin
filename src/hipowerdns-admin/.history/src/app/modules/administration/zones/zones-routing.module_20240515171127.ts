import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ZoneComponent } from './zone/zone.component';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [
  {
    'path': 'zones',
    'component': ZoneComponent
  },
  {
    'path': 'templates',
    'component': TemplatesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ZonesRoutingModule { }
