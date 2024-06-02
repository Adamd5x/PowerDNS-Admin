import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordAComponent } from './record-a/record-a.component';
import { RecordAaaaComponent } from './record-aaaa/record-aaaa.component';
import { RecordAfsdbComponent } from './record-afsdb/record-afsdb.component';

const records = [
  RecordAComponent,
  RecordAaaaComponent,
  RecordAfsdbComponent
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RecordsModule { }
