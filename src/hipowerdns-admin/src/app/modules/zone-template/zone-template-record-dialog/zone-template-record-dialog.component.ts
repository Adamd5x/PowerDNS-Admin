import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../models';

@Component({
  selector: 'app-zone-template-record-dialog',
  templateUrl: './zone-template-record-dialog.component.html',
  styleUrls: ['./zone-template-record-dialog.component.scss']
})
export class ZoneTemplateRecordDialogComponent {
  title = 'New record';

  constructor(public dialogRef: MatDialogRef<ZoneTemplateRecordDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData){
  }

  onSave(): void {

  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
