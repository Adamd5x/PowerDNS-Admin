import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatDialogConfig} from '@angular/material/dialog';

import { ZoneTemplate } from '@app/shared/models/zone-template/zone-template';
import { ZoneTemplateDialogComponent } from '../zone-template-dialog/zone-template-dialog.component';
import { ZoneTemplateService } from '../../../services/data/zone-template.service';
import { ZoneTemplateRequest } from '../../../../../.history/src/app/modules/zone-template/models/zone-template-request_20240524162005';

@Component({
  selector: 'app-templates-home',
  templateUrl: './templates-home.component.html',
  styleUrls: ['./templates-home.component.scss']
})
export class TemplatesHomeComponent implements OnInit {

  data : ZoneTemplate[] = [];

  displayColumns = ['name', 'records', 'active', 'id' ];

  constructor(private activatedRoute: ActivatedRoute,
              private dataService: ZoneTemplateService,
              public dialog: MatDialog){}

  ngOnInit(): void {
    this.getData();
  }

  onAddNewTemplate(): void {
    const dialogConf : MatDialogConfig = {
      height: '475px',
      width: '700px',
      autoFocus: 'dialog',
      data: { templateId: ''}
    }
    const dialogRef = this.dialog.open(ZoneTemplateDialogComponent, dialogConf);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const newTemplate : ZoneTemplateRequest = {
          id: result.id,
          name: result.name,
          description: result.description,
          active: result.isActive
        }

        this.dataService
            .createTemplate(newTemplate)
            .subscribe({
              next: () => {},
              error: () => {},
              complete: () => this.getData()
            });
      }
    });
  }

  private getData(): void {
    this.dataService
    .getTemplates()
    .subscribe({
      next: (response) => {
        this.data = response;
  }})
  }
}
