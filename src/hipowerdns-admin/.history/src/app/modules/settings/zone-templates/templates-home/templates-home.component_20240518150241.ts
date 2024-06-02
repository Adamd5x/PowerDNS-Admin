import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoneTemplate } from '@app/shared/models/zone-template/zone-template';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-templates-home',
  templateUrl: './templates-home.component.html',
  styleUrls: ['./templates-home.component.scss']
})
export class TemplatesHomeComponent implements OnInit {

  data : ZoneTemplate[] = [];

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => {
      this.data = data;
    });
  }



}
