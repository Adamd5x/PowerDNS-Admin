import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoneTemplateDetails } from '@app/shared/models/zone-template';


@Component({
  selector: 'app-zone-template-details',
  templateUrl: './zone-template-details.component.html',
  styleUrls: ['./zone-template-details.component.scss']
})
export class ZoneTemplateDetailsComponent implements OnInit {

  data: ZoneTemplateDetails = { id: '', name: '', active: false, records: null};

  columns = ['id', 'name', 'type', 'data', 'ttl', 'active', 'description', 'action']

  constructor(private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => this.data = data);
  }
}
