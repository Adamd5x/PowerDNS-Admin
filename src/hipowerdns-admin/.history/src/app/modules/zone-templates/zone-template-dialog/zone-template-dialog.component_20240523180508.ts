import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DialogData } from '../models';
import { ZoneTemplateService } from '@app/services/data/zone-template.service';

@Component({
  selector: 'app-zone-template-dialog',
  templateUrl: './zone-template-dialog.component.html',
  styleUrls: ['./zone-template-dialog.component.scss']
})
export class ZoneTemplateDialogComponent implements OnInit {

  title = 'Create a new zone temlate';

  constructor(private dataService: ZoneTemplateService,
              public dialogRef: MatDialogRef<ZoneTemplateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData
  ){}

 ngOnInit(): void {
    if (this.data.templateId) {
      this.title = `Edit template`;
    }
 }

 onSave(): void {

 }

 onCancel(): void {
  this.dialogRef.close();
 }
}
