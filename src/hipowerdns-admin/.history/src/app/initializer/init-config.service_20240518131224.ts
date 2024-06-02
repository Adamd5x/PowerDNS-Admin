import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@app/../environments/environment';
import { BehaviorSubject, filter, map } from 'rxjs';
import { Endpoints } from '../shared/models/initApp/endpoints';


@Injectable({
  providedIn: 'root'
})
export class InitConfigService {

  private endpoints = new BehaviorSubject<Endpoints | null>(null);
  readonly api$ = this.endpoints
             .asObservable()
             .pipe(
              filter(endpoints => !!endpoints),
              map(endpoints => endpoints?.api));

  get api() {
    return this.endpoints.getValue()?.api;
  }

  get licenseCheck() {
    return this.endpoints.getValue()?.licenseCheck;
  }

  get logging() {
    return this.endpoints.getValue()?.logging;
  }

  constructor(private http: HttpClient) { }

  fetchEndpoints() {
    const baseApi = environment.BaseApi;
    console.log(`Base api: ${baseApi}`);
    
    this.http
        .get<Endpoints>(`${baseApi}/api/Init`)
        .subscribe({
          next: (endpoints)  => this.endpoints.next(endpoints),
          error: () => this.endpoints.next({api: 'http://fallback.example.com'})
        });
  }
}
