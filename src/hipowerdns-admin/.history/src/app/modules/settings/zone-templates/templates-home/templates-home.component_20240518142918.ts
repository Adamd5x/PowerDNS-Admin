import { Component } from '@angular/core';
import { ZoneTemplateService } from '@app/core/http/zone-template.service';

@Component({
  selector: 'app-templates-home',
  templateUrl: './templates-home.component.html',
  styleUrls: ['./templates-home.component.scss']
})
export class TemplatesHomeComponent {
  constructor(private dataService: ZoneTemplateService){}

  

}
