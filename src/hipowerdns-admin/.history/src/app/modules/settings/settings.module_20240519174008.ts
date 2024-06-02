import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { AdminErrorHandler } from '@app/core/handlers/admin-error-handler';

import { ZoneTemplateService } from '@app/core/http/zone-template.service';


@NgModule({
  declarations: [
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
