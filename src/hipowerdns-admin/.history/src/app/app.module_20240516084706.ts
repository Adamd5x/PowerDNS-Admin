import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminErrorHandler } from '@core/handlers/admin-error-handler';
import { HttpClientModule } from '@angular/common/http';
import { InitializerModule } from './initializer/initializer.module';
import { interval, take } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InitializerModule
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
