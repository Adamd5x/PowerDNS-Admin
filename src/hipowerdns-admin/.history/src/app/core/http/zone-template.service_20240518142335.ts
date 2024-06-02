import { Injectable } from '@angular/core';
import { BaseDataService } from './base.data.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ZoneTemplate } from '@app/shared/models/zone-template/zone-template';

@Injectable()
export class ZoneTemplateService extends BaseDataService {

  private readonly controllerName = 'ZoneTemplate';

  constructor(http: HttpClient) {
    super(http);
  }

  getTemplates(): Observable<ZoneTemplate[]> {    
    return this.get<ZoneTemplate[]>(`/${this.controllerName}`);
  }

  getTemplate(id: string): Observable<ZoneTemplate> {
    return this.get<ZoneTemplate>(`/${this.controllerName}/${id}`)
  }

  createTemplate(entry: any): void {

  }

  updateTemplate(id: string, entry: any): void {

  }

  deleteTemplate(id: string): void {

  }
}
