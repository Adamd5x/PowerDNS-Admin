import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ZoneTemplateDetails } from '@app/shared/models/zone-template';


@Component({
  selector: 'app-zone-template-details',
  templateUrl: './zone-template-details.component.html',
  styleUrls: ['./zone-template-details.component.scss']
})
export class ZoneTemplateDetailsComponent implements OnInit {

  data: ZoneTemplateDetails = { id: '', name: '', active: false, records: null};

  displayColumns = ['id', 'name', 'type', 'data', 'ttl', 'active', 'description', 'action']

  constructor(private activatedRoute: ActivatedRoute,
              public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => this.data = data);
  }

  onAddRecord(): void {

  }
}
