import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('0.0.0.0');
  currentMessage  = this.messageSource.asObservable();


  constructor() {}

  changeMessage(message: string): void {
    this.messageSource.next(message);
  }

}
