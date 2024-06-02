import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDirective } from './time/time.directive';

const directives = [
  TimeDirective
];

@NgModule({
  declarations: [directives],
  imports: [
    CommonModule
  ],
  exports: [
    directives
  ]
})
export class DirectivesModule { }
