import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ZoneComponent } from './zone/zone.component';

const routes: Routes = [
  {
    'path': 'zone',
    'component': ZoneComponent
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
