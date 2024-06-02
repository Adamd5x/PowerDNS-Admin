import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordAComponent } from './record-a/record-a.component';
import { RecordAaaaComponent } from './record-aaaa/record-aaaa.component';
import { RecordAfsdbComponent } from './record-afsdb/record-afsdb.component';
import { RecordAliasComponent } from './record-alias/record-alias.component';
import { RecordCaaComponent } from './record-caa/record-caa.component';
import { RecordCertComponent } from './record-cert/record-cert.component';
import { RecordCnameComponent } from './record-cname/record-cname.component';
import { RecordDnameComponent } from './record-dname/record-dname.component';
import { RecordDsComponent } from './record-ds/record-ds.component';
import { RecordHttpsComponent } from './record-https/record-https.component';
import { RecordLocComponent } from './record-loc/record-loc.component';
import { RecordMinfoComponent } from './record-minfo/record-minfo.component';
import { RecordMxComponent } from './record-mx/record-mx.component';
import { RecordNaptrComponent } from './record-naptr/record-naptr.component';
import { RecordNsComponent } from './record-ns/record-ns.component';
import { RecordPtrComponent } from './record-ptr/record-ptr.component';
import { RecordRpComponent } from './record-rp/record-rp.component';
import { RecordSoaComponent } from './record-soa/record-soa.component';
import { RecordSrvComponent } from './record-srv/record-srv.component';
import { RecordTlsaComponent } from './record-tlsa/record-tlsa.component';
import { RecordTxtComponent } from './record-txt/record-txt.component';

const records = [
  RecordAComponent,
  RecordAaaaComponent,
  RecordAfsdbComponent,
  RecordAliasComponent,
  RecordCaaComponent,
  RecordCertComponent,
  RecordCnameComponent,
  RecordDnameComponent,
  RecordDsComponent,
  RecordHttpsComponent,
  RecordLocComponent,
  RecordMinfoComponent,
  RecordMxComponent,
  RecordNaptrComponent,
  RecordNsComponent,
  RecordPtrComponent,
  RecordRpComponent,
  RecordSoaComponent,
  RecordSrvComponent,
  RecordTlsaComponent,
  RecordTxtComponent
]

@NgModule({
  declarations: [records],
  imports: [
    CommonModule
  ],
  exports: [records]
})
export class RecordsModule { }
