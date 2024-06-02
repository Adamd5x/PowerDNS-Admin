import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

const routing: Routes = [
  {
    'path' : '',
    'component': HomeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    routing
  ]
})
export class ServersRoutingModule { }
