import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@app/environments/environment';
import { BehaviorSubject, filter, map } from 'rxjs';
import { Endpoints } from '../shared/models/initApp/endpoints';
import { Endpoints } from '../../../.history/src/app/shared/models/initApp/endpoints_20240516080218';


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

  readonly checkLicense$ = this.endpoints 
                               .asObservable()
                               .pipe(
                                  filter(endpoints => !!endpoints),
                                  map(endpoints => endpoints?.licenseCheck));

  readonly logging$ = this.endpoints
                          .asObservable()
                          .pipe(
                            filter(endpoints => !!endpoints),
                            map(endpoints => endpoints?.logging));

  constructor(private http: HttpClient) { }

  fetchEndpoints() {
    this.http
        .get<Endpoints>(`https://localhost:32772/api/Init/endpoints`)
        .subscribe({
          next: (endpoints)  => this.endpoints.next(endpoints),
          error: () => this.endpoints.next({api: 'http://fallback.example.com'})
        });
  }
}
