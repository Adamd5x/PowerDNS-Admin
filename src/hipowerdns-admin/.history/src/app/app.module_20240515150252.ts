import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UsersComponent } from './administration/users/users.component';
import { ZoneComponent } from './administration/zone/zone.component';
import { ServersComponent } from './administration/servers/servers.component';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { TemplatesComponent } from './administration/zones/templates/templates.component';
import { EditTemplateComponent } from './administration/zones/edit-template/edit-template.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    ZoneComponent,
    ServersComponent,
    StatisticsComponent,
    TemplatesComponent,
    EditTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
