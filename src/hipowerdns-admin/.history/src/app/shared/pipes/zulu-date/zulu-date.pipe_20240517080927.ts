import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zuluDate'
})
export class ZuluDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
