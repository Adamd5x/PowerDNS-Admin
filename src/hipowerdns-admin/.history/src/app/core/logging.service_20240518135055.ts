import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InitConfigService } from '@app/initializer/init-config.service';

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
          {}).subscribe();
  }

  LogWarning(entry: any): void {

  }

  LogError(entry: any): void {

  }

  private getLoggingHeader(): HttpHeaders {
    const loggingHeaders = new HttpHeaders();
    loggingHeaders.append('X-hiPowerAdmin-Loggin', 'true');
    return loggingHeaders;
  }
}
