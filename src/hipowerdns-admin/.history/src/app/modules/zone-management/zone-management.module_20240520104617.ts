import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ZoneComponent } from './zone/zone.component';
import { ZoneCreateComponent } from './zone-create/zone-create.component';
import { ZoneRemoveComponent } from './zone-remove/zone-remove.component';
import { ZoneManagementRoutingModule } from './zone-management-routing';
import { AdminErrorHandler } from '@app/core/handlers/admin-error-handler';
import { ZoneManagementService } from '@app/core/http/zone-management.service';


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
  ],
  providers:[
    ZoneManagementService,
    {
      provide: ErrorHandler,
      useClass: AdminErrorHandler
    }
  ]
})
export class ZoneManagementModule { }
