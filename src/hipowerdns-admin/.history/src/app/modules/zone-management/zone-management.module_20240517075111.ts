import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ZoneComponent } from './zone/zone.component';
import { ZoneCreateComponent } from './zone-create/zone-create.component';



@NgModule({
  declarations: [
    HomeComponent,
    ZoneComponent,
    ZoneCreateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ZoneManagementModule { }
