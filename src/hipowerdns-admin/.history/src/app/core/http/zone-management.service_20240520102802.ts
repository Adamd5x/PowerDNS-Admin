import { Injectable } from '@angular/core';
import { BaseDataService } from './base.data.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ZoneManagementService extends BaseDataService {

  constructor(http: HttpClient) 
  { 
    super(http);
  }
}
