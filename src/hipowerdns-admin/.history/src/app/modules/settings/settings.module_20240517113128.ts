import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { TemplatesHomeComponent } from './zone-templates/templates-home/templates-home.component';
import { ZoneTemplateComponent } from './zone-templates/zone-template/zone-template.component';
import { ZoneTemplateEditComponent } from './zone-templates/zone-template-edit/zone-template-edit.component';

@NgModule({
  declarations: [
    HomeComponent,
    TemplatesHomeComponent,
    ZoneTemplateComponent,
    ZoneTemplateEditComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HomeComponent]
})
export class SettingsModule { }
