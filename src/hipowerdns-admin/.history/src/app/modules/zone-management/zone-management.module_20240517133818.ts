import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ZoneComponent } from './zone/zone.component';
import { ZoneCreateComponent } from './zone-create/zone-create.component';
import { ZoneRemoveComponent } from './zone-remove/zone-remove.component';
import { ZoneManagementRoutingModule } from './zone-management-routing';

@NgModule({
  declarations: [
    HomeComponent,
    ZoneComponent,
    ZoneCreateComponent,
    ZoneRemoveComponent
  ],
  imports: [
    CommonModule,
    ZoneManagementRoutingModule  
  ]
})
export class ZoneManagementModule { }
