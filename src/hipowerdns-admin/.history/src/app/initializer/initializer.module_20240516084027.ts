import { NgModule, APP_INITIALIZER } from '@angular/core';
import { InitConfigService } from './init-config.service';
import { take } from 'rxjs';

@NgModule({
providers: [
  {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: (config: InitConfigService) => {
      return () => {
        console.log('app initializing...');
        config.fetchEndpoints();
        return config.api$.pipe(take(1));
      }
    },
    deps: [InitConfigService]
  }
]
})
export class InitializerModule { }
