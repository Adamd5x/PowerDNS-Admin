import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoadingService } from './loading.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'loading',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {
  loading$: Observable<boolean>;
  @Input()
  detectRouteingOngoing = false;

  @ContentChild("loading")
  customLoadingIndicator: TemplateRef<any> | null = null;

  constructor(private loadingService: LoadingService,
              private router: Router) {
    this.loading$ = this.loadingService.loading$;
  }

  ngOnInit(): void {
    if (this.detectRouteingOngoing) {
      this.router
          .events
          .pipe(
            tap((event) => {
              if (event instanceof NavigationStart) {
                this.loadingService.loadingOn();
              } else if (event instanceof NavigationEnd ||
                         event instanceof NavigationError ||
                         event instanceof NavigationCancel
              ) {
                this.loadingService.loadingOff();
              }
              // if (event instanceof RouteConfigLoadStart) {
              //   this.loadingService.loadingOn();
              // } else {
              //   this.loadingService.loadingOff();
              // }
            }))
          .subscribe();
    }
  }

}
