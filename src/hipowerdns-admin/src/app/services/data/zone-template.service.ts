import { Injectable } from '@angular/core';
import { BaseDataService } from './base.data.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ZoneTemplate } from '@app/shared/models/zone-template/zone-template';
import { ZoneTemplateDetails } from '@app/shared/models/zone-template';
import { ZoneTemplateRequest } from '@app/modules/zone-template/models/zone-template-request';


@Injectable({
  providedIn: 'root'
})
export class ZoneTemplateService extends BaseDataService {

  private readonly controllerName = 'ZoneTemplate';

  constructor(http: HttpClient) {
    super(http);
  }

  getTemplates(): Observable<ZoneTemplate[]> {    
    return this.get<ZoneTemplate[]>(`${this.controllerName}`);
  }

  getTemplate(id: string): Observable<ZoneTemplateDetails> {
    return this.get<ZoneTemplateDetails>(`${this.controllerName}/${id}`)
  }

  createTemplate(entry: ZoneTemplateRequest): Observable<void> {
    return this.post<ZoneTemplateRequest>(`${this.controllerName}`, entry);
  }

  updateTemplate(id: string, entry: ZoneTemplateRequest): Observable<void> {
    return this.update<ZoneTemplateRequest>(`${this.controllerName}/${id}`, entry);
  }

  deleteTemplate(id: string): Observable<void> {
    return this.delete(`${this.controllerName}/${id}`);
  }
}
