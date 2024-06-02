import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
providers: [
  {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: () => {
      return () => {

      }
    }
  }
]
})
export class InitializerModule { }
