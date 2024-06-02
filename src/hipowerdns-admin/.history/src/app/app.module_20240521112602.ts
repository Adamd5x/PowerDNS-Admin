import { ErrorHandler, NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminErrorHandler } from '@core/handlers/admin-error-handler';
import { HttpClientModule } from '@angular/common/http';
import { InitializerModule } from './initializer/initializer.module';
import { LoadingService } from './shared/components/loading/loading.service';
import { MessageService } from './shared/components/messages/messages.service';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    HttpClientModule,
    InitializerModule,
    CoreModule
  ],
  providers: [
    LoadingService,
    MessageService,
    {
      provide: ErrorHandler,
      useClass: AdminErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
