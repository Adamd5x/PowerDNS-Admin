import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDirective } from './time/time.directive';



@NgModule({
  declarations: [
    TimeDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
