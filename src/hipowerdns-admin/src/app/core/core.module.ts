import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from "@app/shared/shared.module";
import { FooterComponent } from "@app/core/layout/footer/footer.component";
import { HeaderComponent } from "@app/core/layout/header/header.component";
import { SidebarComponent } from "@app/core/layout/sidebar/sidebar.component";
import { DashboardComponent } from "@app/pages/dashboard/dashboard.component";
import { ErrorNotFoundComponent } from "@app/pages/error-not-found/error-not-found.component";
import { LoginComponent } from "@app/pages/login/login.component";
import { PassRecoverComponent } from "@app/pages/pass-recover/pass-recover.component";

const coreModules = [
    DashboardComponent,
    ErrorNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    PassRecoverComponent   
]

@NgModule({
    declarations: [
        coreModules
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule
    ],
    exports: [
        coreModules
    ]
})
export class CoreModule {
}