import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminErrorHandler } from '@core/handlers/admin-error-handler';
import { HttpClientModule } from '@angular/common/http';
import { InitializerModule } from './initializer/initializer.module';
import { interval, take } from 'rxjs';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent    
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
