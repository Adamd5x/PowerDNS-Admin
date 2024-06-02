import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ZuluDate',
  pure: true
})
export class ZuluDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
