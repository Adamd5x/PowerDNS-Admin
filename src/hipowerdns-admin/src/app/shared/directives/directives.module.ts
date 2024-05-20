import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDirective } from './time/time.directive';
import { EnabledDirective } from './enabled/enabled.directive';

const directives = [
  TimeDirective
];

@NgModule({
  declarations: [directives, EnabledDirective],
  imports: [
    CommonModule
  ],
  exports: [
    directives
  ]
})
export class DirectivesModule { }
