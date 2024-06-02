import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoneTemplate } from '@app/shared/models/zone-template/zone-template';

@Component({
  selector: 'app-zone-template-edit',
  templateUrl: './zone-template-edit.component.html',
  styleUrls: ['./zone-template-edit.component.scss']
})
export class ZoneTemplateEditComponent implements OnInit {

  data: ZoneTemplate = {
    id: '',
    name: '',
    records: 0,
    active: false
  };

  constructor() {
  }

  ngOnInit(): void {

    
  
  }
}
