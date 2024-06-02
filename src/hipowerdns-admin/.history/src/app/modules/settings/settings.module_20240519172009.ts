import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesHomeComponent } from './zone-templates/templates-home/templates-home.component';
import { ZoneTemplateEditComponent } from './zone-templates/zone-template-edit/zone-template-edit.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { AdminErrorHandler } from '@app/core/handlers/admin-error-handler';
import { MaterialModule } from '@materials/material.module';
import { ZoneTemplateService } from '@app/core/http/zone-template.service';
import { ZoneTemplateDetailsComponent } from './zone-templates/zone-template-details/zone-template-details.component';

@NgModule({
  declarations: [
    TemplatesHomeComponent,
    ZoneTemplateEditComponent,
    ZoneTemplateDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SettingsRoutingModule
  ],
  providers: [
    ZoneTemplateService,
    {
      provide: ErrorHandler,
      useClass: AdminErrorHandler
    }
  ]
})
export class SettingsModule { }
