import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminErrorHandler } from '@core/handlers/admin-error-handler';
import { HttpClientModule } from '@angular/common/http';
import { InitializerModule } from './initializer/initializer.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { PassRecoverComponent } from './pages/pass-recover/pass-recover.component';
import { LoadingService } from './shared/components/loading/loading.service';
import { LoadingModule } from './shared/components/loading/loading.module';
import { MessageService } from './shared/components/messages/messages.service';
import { MessageModule } from './shared/components/messages/messages.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    PassRecoverComponent    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InitializerModule,
    LoadingModule,
    MessageModule
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
