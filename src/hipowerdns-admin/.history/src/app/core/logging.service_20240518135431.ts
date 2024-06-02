import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InitConfigService } from '@app/initializer/init-config.service';
import { LoggingType } from './types/loggin-type';
import { LoggingType } from '../../../.history/src/app/core/types/loggin-type_20240518135252';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  constructor(private http: HttpClient,
              private config: InitConfigService) { }

  LogInformation(entry: any): void {
    const loggingUrl = this.config.logging;
    this.http
        .post(loggingUrl, entry,
          {
            headers: this.getLoggingHeader('Information')
          }).subscribe();
  }

  LogWarning(entry: any): void {

  }

  LogError(entry: any): void {

  }

  private getLoggingHeader(type: LoggingType): HttpHeaders {
    const loggingHeaders = new HttpHeaders();
    loggingHeaders.append('X-hiPowerAdmin-Logging', 'true');
    loggingHeaders.append('X-hiPowerAdmin-Loggin-Type', type);
    return loggingHeaders;
  }
}
