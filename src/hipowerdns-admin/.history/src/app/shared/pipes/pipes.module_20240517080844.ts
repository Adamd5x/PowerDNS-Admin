import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZuluDatePipe } from './zulu-date.pipe';



@NgModule({
  declarations: [
    ZuluDatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
