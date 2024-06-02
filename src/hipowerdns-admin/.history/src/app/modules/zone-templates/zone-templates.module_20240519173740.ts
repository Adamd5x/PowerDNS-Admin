import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneTemplateService } from '@app/core/http/zone-template.service';
import { AdminErrorHandler } from '@app/core/handlers/admin-error-handler';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
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
