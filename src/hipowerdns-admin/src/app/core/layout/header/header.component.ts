import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {
    
  }
  ngOnInit(): void {
  }

  sidebarToggle(): void {
    this.document.body.classList.toggle('toggle-sidebar');
  }
}
