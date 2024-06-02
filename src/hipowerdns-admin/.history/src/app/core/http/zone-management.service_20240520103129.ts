import { Injectable } from '@angular/core';
import { BaseDataService } from './base.data.service';
import { HttpClient } from '@angular/common/http';
import { Zone } from '@app/shared/models/zone-management';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ZoneManagementService extends BaseDataService {

  private readonly controllerName = 'ZoneManagement';

  constructor(http: HttpClient) 
  { 
    super(http);
  }

  getZones(): Observable<Zone> {
    return this.get<Zone>(`${this.controllerName}`);
  }
}
