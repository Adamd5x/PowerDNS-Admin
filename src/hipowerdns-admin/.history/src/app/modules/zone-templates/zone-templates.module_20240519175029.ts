import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneTemplateService } from '@app/core/http/zone-template.service';
import { AdminErrorHandler } from '@app/core/handlers/admin-error-handler';
import { MaterialModule } from '@materials/material.module';
import { ZoneTemplatesRoutingMonule } from './zone-templates-routing.module';
import { TemplatesHomeComponent } from './templates-home/templates-home.component';
import { ZoneTemplateDetailsComponent } from './zone-template-details/zone-template-details.component';
import { ZoneTemplateEditComponent } from './zone-template-edit/zone-template-edit.component';

@NgModule({
  declarations: [
    TemplatesHomeComponent,
    ZoneTemplateDetailsComponent,
    ZoneTemplateEditComponent
  ],
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
