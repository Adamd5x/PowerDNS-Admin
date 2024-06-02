import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InitConfigService {

  constructor(private http: HttpClient) { }

  fetchEndpoints() {
    this.http.get(`${}`)
  }
}
