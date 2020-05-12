import { Directive } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Directive({
  selector: '[appInputToCountdown]'
})
export class InputToCountdownDirective {

  private state = new BehaviorSubject({
    seconds: 0,
    minutes: 0,
    totalTime: 0
  });

  public obs$ = this.state.asObservable();

  updateState(value, command) {
    // tslint:disable-next-line: radix
    let valToNumber = parseInt(value);
    if (valToNumber < 0) { valToNumber = 0; }
    // tslint:disable-next-line: prefer-const
    let update = this.state.value;
    if (command === 'seconds') { update.seconds = valToNumber; }
    if (command === 'minutes') { update.minutes = valToNumber; }
    update.totalTime = this.calculateSeconds(update);
    this.state.next(update);
  }

  calculateSeconds(update) {
    let totalTime = update.seconds;
    totalTime += update.minutes * 60;
    return totalTime;
  }

  constructor() { }

  getSeconds() {
    return this.state.value.seconds;
  }

  getMinutes() {
    return this.state.value.minutes;
  }

  getTotalSeconds() {
    return this.state.value.totalTime;
  }


}
