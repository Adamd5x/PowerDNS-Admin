import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../models';

@Component({
  selector: 'app-zone-template-dialog',
  templateUrl: './zone-template-dialog.component.html',
  styleUrls: ['./zone-template-dialog.component.scss']
})
export class ZoneTemplateDialogComponent implements OnInit {

  title = 'Create a new zone template';
  activeTitle = 'Diasable';
  isActive = false;
  name = '';
  description = '';

  constructor(public dialogRef: MatDialogRef<ZoneTemplateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData
  ){}

 ngOnInit(): void {
    if (this.data.templateId) {
      this.title = `Edit template`;
    }
 }

 onActiveChange(): void {
    if (this.isActive) {
      this.activeTitle = 'Enable';
    } else {
      this.activeTitle = 'Disable';
    }
 }

 onSave(): void {
  this.dialogRef.close({
    templateId: '',
    name: this.name,
    description: this.description,
    isActive: this.isActive
  })
 }

 onCancel(): void {
  this.dialogRef.close();
 }
}
