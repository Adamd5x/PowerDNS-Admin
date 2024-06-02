import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ZoneTemplate } from '@app/shared/models/zone-template/zone-template';

@Component({
  selector: 'app-zone-template-edit',
  templateUrl: './zone-template-edit.component.html',
  styleUrls: ['./zone-template-edit.component.scss']
})
export class ZoneTemplateEditComponent implements OnInit {

  data: ZoneTemplate = {
    id: '',
    name: '',
    records: 0,
    active: false
  };

  constructor(public dialogRef: MatDialogRef<ZoneTemplateEditComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: DialogData) {
  }

  ngOnInit(): void {
  }
}
