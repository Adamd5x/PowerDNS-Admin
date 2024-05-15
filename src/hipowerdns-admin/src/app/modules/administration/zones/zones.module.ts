import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ZoneComponent } from './zone/zone.component';
import { RecordAComponent } from './records/record-a/record-a.component';
import { RecordNsComponent } from './records/record-ns/record-ns.component';
import { RecordSoaComponent } from './records/record-soa/record-soa.component';
import { RecordMxComponent } from './records/record-mx/record-mx.component';
import { RecordTxtComponent } from './records/record-txt/record-txt.component';
import { RecordCnameComponent } from './records/record-cname/record-cname.component';
import { RecordSrvComponent } from './records/record-srv/record-srv.component';
import { RecordRpComponent } from './records/record-rp/record-rp.component';
import { RecordMinfoComponent } from './records/record-minfo/record-minfo.component';
import { RecordTlsaComponent } from './records/record-tlsa/record-tlsa.component';
import { RecordCaaComponent } from './records/record-caa/record-caa.component';
import { RecordLocComponent } from './records/record-loc/record-loc.component';
import { RecordHttpsComponent } from './records/record-https/record-https.component';
import { RecordDsComponent } from './records/record-ds/record-ds.component';
import { RecordDnameComponent } from './records/record-dname/record-dname.component';
import { RecordCertComponent } from './records/record-cert/record-cert.component';
import { RecordAfsdbComponent } from './records/record-afsdb/record-afsdb.component';
import { RecordAaaaComponent } from './records/record-aaaa/record-aaaa.component';
import { RecordAliasComponent } from './records/record-alias/record-alias.component';
import { RecordNaptrComponent } from './records/record-naptr/record-naptr.component';
import { RecordPtrComponent } from './records/record-ptr/record-ptr.component';



@NgModule({
  declarations: [
    HomeComponent,
    ZoneComponent,
    RecordAComponent,
    RecordNsComponent,
    RecordSoaComponent,
    RecordMxComponent,
    RecordTxtComponent,
    RecordCnameComponent,
    RecordSrvComponent,
    RecordRpComponent,
    RecordMinfoComponent,
    RecordTlsaComponent,
    RecordCaaComponent,
    RecordLocComponent,
    RecordHttpsComponent,
    RecordDsComponent,
    RecordDnameComponent,
    RecordCertComponent,
    RecordAfsdbComponent,
    RecordAaaaComponent,
    RecordAliasComponent,
    RecordNaptrComponent,
    RecordPtrComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ZonesModule { }
