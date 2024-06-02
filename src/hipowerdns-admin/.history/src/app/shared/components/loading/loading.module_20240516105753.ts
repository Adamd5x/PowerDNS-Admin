import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './loading-indicator.component';
import { LoadingService } from './loading.service';



@NgModule({
  declarations: [
    LoadingIndicatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingIndicatorComponent
  ],
  providers: [
    LoadingService
  ]
})
export class LoadingModule { }
