import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime',
  pure: true
})
export class DateTimePipe implements PipeTransform {
  transform(value: Date, lcid: 'en-US' | string): any {

    if (lcid) {
      return this.toString(value, lcid) ;
    }
    return this.toString(value, 'PL-PL') ;
  }

  private toString(value: Date, lcid: string): string {
    return value.toLocaleString(lcid, { timeZone: 'UTC'});
  }
}
