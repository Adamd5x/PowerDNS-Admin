import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent {

loading$: Observable<boolean>;



}
