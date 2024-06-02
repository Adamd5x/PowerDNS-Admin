import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { TemplatesHomeComponent } from './zone-templates/templates-home/templates-home.component';

@NgModule({
  declarations: [
    HomeComponent,
    TemplatesHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
