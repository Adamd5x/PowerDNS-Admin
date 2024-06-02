import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): any {
    return Date.toLocaleString('pl-PL', { timeZone: 'UTC'});
  }
}
