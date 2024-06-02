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

  title = '';

  constructor(private dataService: ZoneTemplateService,
              public dialogRef: MatDialogRef<ZoneTemplateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData
  ){}

 ngOnInit(): void {

 }

 onSave(): void {

 }

 onCancel(): void {
  this.dialogRef.close();
 }
}
