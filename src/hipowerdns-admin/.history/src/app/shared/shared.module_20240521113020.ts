import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminErrorHandler } from '@app/core/handlers/admin-error-handler';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AdminErrorHandler
    }
  ]
})
export class SharedModule { }
