import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '@app/environments/environment';


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
