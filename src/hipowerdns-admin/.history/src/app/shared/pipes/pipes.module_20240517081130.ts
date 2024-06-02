import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZuluDatePipe } from './zulu-date/zulu-date.pipe';

const pipes = [
  ZuluDatePipe
];

@NgModule({
  declarations: [
    pipes
  ],
  imports: [
    CommonModule
  ],
  exports: [
    pipes
  ]
})
export class PipesModule { }
