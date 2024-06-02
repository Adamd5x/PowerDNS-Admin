import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ZoneComponent } from './zone/zone.component';
import { ZoneCreateComponent } from './zone-create/zone-create.component';

import { RecordAComponent } from '../../shared/components/records/record-a/record-a.component';

@NgModule({
  declarations: [
    HomeComponent,
    ZoneComponent,
    ZoneCreateComponent,
    RecordAComponent
  ],
  imports: [
    CommonModule    
  ]
})
export class ZoneManagementModule { }
