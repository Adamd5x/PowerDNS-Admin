import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneTemplateService } from '@app/core/http/zone-template.service';
import { AdminErrorHandler } from '@app/core/handlers/admin-error-handler';
import { MaterialModule } from '@materials/material.module';
import { ZoneTemplatesRoutingMonule } from './zone-templates-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ZoneTemplatesRoutingMonule
  ],
  providers: [
    ZoneTemplateService,
    {
      provide: ErrorHandler,
      useClass: AdminErrorHandler
    }
  ]
})
export class ZoneTemplatesModule { }
