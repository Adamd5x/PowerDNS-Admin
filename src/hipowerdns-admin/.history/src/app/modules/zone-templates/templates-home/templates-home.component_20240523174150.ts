import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

import { ZoneTemplate } from '@app/shared/models/zone-template/zone-template';

@Component({
  selector: 'app-templates-home',
  templateUrl: './templates-home.component.html',
  styleUrls: ['./templates-home.component.scss']
})
export class TemplatesHomeComponent implements OnInit {

  data : ZoneTemplate[] = [];

  displayColumns = ['name', 'records', 'active', 'id' ];

  constructor(private activatedRoute: ActivatedRoute,
              public dialog: MatDialog){}

  ngOnInit(): void {
    this.activatedRoute
        .data
        .subscribe(({data}) => {
          this.data = data;});
  }

  onAddNewTemplate(): void {
    
  }
}
