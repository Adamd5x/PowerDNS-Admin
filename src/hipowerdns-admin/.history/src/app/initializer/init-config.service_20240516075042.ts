import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@app/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitConfigService {

  private endPoints = new BehaviorSubject<null | >(null);

  constructor(private http: HttpClient) { }

  fetchEndpoints() {
    this.http
        .get(`https://localhost:32772/api/Init/endpoints`)
        .subscribe({

        });
  }
}
