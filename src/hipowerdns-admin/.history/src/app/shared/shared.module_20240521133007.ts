import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminErrorHandler } from '@app/core/handlers/admin-error-handler';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { MessageModule } from './components/messages/messages.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoadingModule,
    MessageModule
  ],
  exports: [
    CommonModule,
    LoadingModule,
    MessageModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AdminErrorHandler
    }
  ]
})
export class SharedModule { }
