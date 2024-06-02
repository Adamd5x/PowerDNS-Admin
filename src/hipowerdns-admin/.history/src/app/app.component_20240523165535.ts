import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { InitConfigService } from './initializer/init-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PowerDNS - hiPower Administrator';

  constructor(private http: HttpClient,
              private config: InitConfigService,
              private elementRef: ElementRef,
              public _router: Router){
  }

  ngOnInit(): void {    

    const s = document.createElement("script");
    s.type = 'txt/javascript';
    s.src = '../assets/js/main.js';
    this.elementRef.nativeElement.appendChild(s);
  }
}
