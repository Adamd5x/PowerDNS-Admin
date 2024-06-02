import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessageService } from './messages.service';



@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessagesComponent
  ]
})
export class MessageModule implements OnInit {
  constructor(private messageService: MessageService){
  }
  ngOnInit(): void {
    
  }
 }
