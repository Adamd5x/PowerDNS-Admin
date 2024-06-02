import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoneTemplate } from '@app/shared/models/zone-template/zone-template';

@Component({
  selector: 'app-templates-home',
  templateUrl: './templates-home.component.html',
  styleUrls: ['./templates-home.component.scss']
})
export class TemplatesHomeComponent implements OnInit {

  data : ZoneTemplate[] = [];

  displayColumns = ['name', 'records', 'active', 'Action' ];

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    console.log('A kuku');
    
    this.activatedRoute
        .data
        .subscribe(({data}) => {
          this.data = data;});
  }
}
