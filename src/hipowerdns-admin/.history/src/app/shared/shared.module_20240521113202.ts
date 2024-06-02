import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminErrorHandler } from '@app/core/handlers/admin-error-handler';
import { LoadingModule } from '../shared/components/loading/loading.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoadingModule
  ],
  exports: [
    CommonModule,
    LoadingModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AdminErrorHandler
    }
  ]
})
export class SharedModule { }
