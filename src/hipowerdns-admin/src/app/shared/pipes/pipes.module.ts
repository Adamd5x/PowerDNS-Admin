import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZuluDatePipe } from './zulu-date/zulu-date.pipe';
import { DateTimePipe } from './date-time/date-time.pipe';

const pipes = [
  ZuluDatePipe,
  DateTimePipe
];

@NgModule({
  declarations: [
    pipes,
    DateTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    pipes
  ]
})
export class PipesModule { }
