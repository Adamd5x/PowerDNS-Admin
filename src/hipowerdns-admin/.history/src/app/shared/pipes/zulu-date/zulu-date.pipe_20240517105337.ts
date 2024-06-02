import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ZuluDate',
  pure: true
})
export class ZuluDatePipe implements PipeTransform {

  transform(value: string | Date, ...args: unknown[]): any {
    return null;
  }

}
