import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime',
  pure: true
})
export class DateTimePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): any {
    return value.toLocaleString('pl-PL', { timeZone: 'UTC'});
  }
}
