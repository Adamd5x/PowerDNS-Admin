import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoadingService } from './loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {

loading$: Observable<boolean>;
@Input()
detectRouteTransition = false;

@ContentChild("loading")
customLoadingIndicator: TemplateRef<any> | null = null;

constructor(private loadingService: LoadingService,
            private router: Router) {
  this.loading$ = this.loadingService.loading$;
}

ngOnInit(): void {
  if (this.detectRouteTransition) {
    this.router
        .events
        .pipe(
          tap((event) => {
            if (event instanceof RouterConfigLoadStart) {
              this.loadingService.loadingOn();
            } else {
              this.loadingService.loadingOff();
            }
          }))
        .subscribe();
  }
}

}
