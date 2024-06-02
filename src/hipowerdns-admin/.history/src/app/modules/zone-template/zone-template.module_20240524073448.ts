import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@materials/material.module';

import { SharedModule } from '@app/shared/shared.module';
import { ZoneTemplatesRoutingMonule } from './zone-template-routing.module';

import { TemplatesHomeComponent } from './templates-home/templates-home.component';
import { ZoneTemplateDetailsComponent } from './zone-template-details/zone-template-details.component';
import { ZoneTemplateDialogComponent } from './zone-template-dialog/zone-template-dialog.component';
import { ZoneTemplateRecordDialogComponent } from './zone-template-record-dialog/zone-template-record-dialog.component';
import { AdminErrorHandler } from '@app/core/handlers/admin-error-handler';

@NgModule({
  declarations: [
    TemplatesHomeComponent,
    ZoneTemplateDetailsComponent,
    ZoneTemplateDialogComponent,
    ZoneTemplateRecordDialogComponent
  ],
  imports: [    
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    SharedModule,
    ZoneTemplatesRoutingMonule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AdminErrorHandler
    }
  ]
})
export class ZoneTemplateModule { }
