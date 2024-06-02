import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime',
  pure: true
})
export class DateTimePipe implements PipeTransform {
  transform(value: Date, lcid?: string): any {

    console.log('');    
    console.log(`DateTime format (lcid: ${lcid ? lcid : 'pl-PL'}), value: ${value}`);    
    console.log('');

    if (lcid) {
      return this.toString(value, lcid) ;
    }
    return this.toString(value, 'pl-PL') ;
  }

  private toString(value: Date, lcid: string): string {
    return value.toLocaleString(lcid, { timeZone: 'UTC'});
  }
}
