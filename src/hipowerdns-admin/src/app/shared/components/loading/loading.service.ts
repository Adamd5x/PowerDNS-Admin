import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingState = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingState.asObservable();

  constructor() { }

  loadingOn(): void {
    this.loadingState.next(true);
  }

  loadingOff(): void {
    this.loadingState.next(false);
  }
}
