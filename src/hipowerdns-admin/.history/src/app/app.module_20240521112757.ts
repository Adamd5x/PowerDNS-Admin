import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminErrorHandler } from '@core/handlers/admin-error-handler';
import { HttpClientModule } from '@angular/common/http';
import { InitializerModule } from './initializer/initializer.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    InitializerModule,
    CoreModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AdminErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
