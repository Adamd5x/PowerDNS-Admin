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

  constructor(private router: ActivatedRoute) {
    console.log('Zone template edit component loaded.');
    
  }

  ngOnInit(): void {
    this.router.data.subscribe(({data}) => {
      this.data = data;
    })
    
    console.log(`Template id:      ${this.data.id}`);
    console.log(`Template name:    ${this.data.name}`);
    console.log(`Template records: ${this.data.records}`);
    console.log(`Template active:  ${this.data.active}`);
    console.log(`*********************************************************************************************`);    
  }
}
