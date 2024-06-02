import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@materials/material.module';

import { ZoneTemplateService } from '@app/core/http/zone-template.service';
import { ZoneTemplatesRoutingMonule } from './zone-templates-routing.module';

import { AdminErrorHandler } from '@app/core/handlers/admin-error-handler';
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
    FormsModule,
    ReactiveFormsModule,
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
