import { NgModule } from '@angular/core';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatDialogModule } from '@angular/material/dialog';

const modules = [
  MatCommonModule,
  MatButtonModule,
  MatBadgeModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule
];

@NgModule({  
  imports: [
    modules
  ],
  exports: [
    modules
  ]
})
export class MaterialModule { }
