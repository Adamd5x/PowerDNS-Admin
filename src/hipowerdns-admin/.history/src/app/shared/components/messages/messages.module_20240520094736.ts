import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesService } from './messages.service';



@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MessagesModule implements OnInit {
  constructor(private messageService: MessagesService){
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 }
