import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatDialogConfig} from '@angular/material/dialog';

import { ZoneTemplate } from '@app/shared/models/zone-template/zone-template';
import { ZoneTemplateDialogComponent } from '../zone-template-dialog/zone-template-dialog.component';

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
    const dialogConf : MatDialogConfig = {
      height: '300px',
      width: '500px',
      autoFocus: 'dialog',
      data: { templateId: ''}
    }
    const dialogRef = this.dialog.open(ZoneTemplateDialogComponent, dialogConf);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog: Zone-Template was closed`);
    });
  }
}
