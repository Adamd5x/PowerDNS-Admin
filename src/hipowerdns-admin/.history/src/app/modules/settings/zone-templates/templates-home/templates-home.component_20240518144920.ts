import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-templates-home',
  templateUrl: './templates-home.component.html',
  styleUrls: ['./templates-home.component.scss']
})
export class TemplatesHomeComponent implements OnInit {

  data$ = EMPTY;

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    //this.data$ = this.activatedRoute.data;
  }



}
