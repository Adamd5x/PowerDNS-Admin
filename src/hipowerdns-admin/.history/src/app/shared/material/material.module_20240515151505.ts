import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

const modules = [
  MatButtonModule,
  MatBadgeModule
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
