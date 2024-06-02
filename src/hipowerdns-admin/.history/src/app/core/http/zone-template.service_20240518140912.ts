import { Injectable } from '@angular/core';
import { BaseDataService } from './base.data.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ZoneTemplate } from '@app/shared/models/zone-template/zone-template';

@Injectable()
export class ZoneTemplateService extends BaseDataService {

  constructor(http: HttpClient) {
    super(http);
  }

  getTemplates(): Observable<ZoneTemplate[]> {
    return of([]);
  }

  getTemplate(id: string): Observable<ZoneTemplate> {
    const template = {
      'id': '',
      'name': '',
      'records': 0,
      'active': true
    }
    return of(template);
  }
}
