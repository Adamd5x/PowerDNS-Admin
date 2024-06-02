import { Injectable } from '@angular/core';
import { BaseDataService } from './base.data.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ZoneTemplateService extends BaseDataService {

  constructor(http: HttpClient) {
    super(http);
  }

  

}
