import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
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
    SharedModule,
    ZoneManagementRoutingModule  
  ],
  providers:[]
})
export class ZoneManagementModule { }
