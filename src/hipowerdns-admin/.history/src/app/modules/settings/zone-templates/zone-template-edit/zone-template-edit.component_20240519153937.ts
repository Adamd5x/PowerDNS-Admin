import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zone-template-edit',
  templateUrl: './zone-template-edit.component.html',
  styleUrls: ['./zone-template-edit.component.scss']
})
export class ZoneTemplateEditComponent implements OnInit {

  data = {};

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.data.subscribe(({data}) => {
      this.data = data;
    })
  }
}
