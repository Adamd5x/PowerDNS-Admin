import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitConfigService } from './init-config.service';



@NgModule({
providers: [
  {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: (config: InitConfigService) => {
      return () => {
        config.fetchEndpoints();
      }
    },
    deps: [
      InitConfigService
    ]
  }
]
})
export class InitializerModule { }
