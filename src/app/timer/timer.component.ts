import { Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { fromEvent, interval, merge, of, range, BehaviorSubject, Subject } from 'rxjs';
import { mapTo, scan, switchMap, takeUntil, concatMap, delay, mergeMap, tap, skipWhile, map } from 'rxjs/operators';
import { InputToCountdownDirective } from 'src/app/directives/InputToCountdown.directive';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, AfterViewInit {
  quarter = 1;
  seconds = 0;
  minutes = 0;

  @ViewChild('start', { static: true })
  startBtn: ElementRef;

  @ViewChild('pause', { static: true })
  pauseBtn: ElementRef;

  @ViewChild('reset', { static: true })
  resetBtn: ElementRef;

  intervalObs$;

  constructor(public d: InputToCountdownDirective) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // 3.1
    // this.s.updateMessage('hello');
    const start$ = fromEvent(this.startBtn.nativeElement, 'click').pipe(mapTo(true));
    const pause$ = fromEvent(this.pauseBtn.nativeElement, 'click').pipe(mapTo(false));
    const reset$ = fromEvent(this.resetBtn.nativeElement, 'click').pipe(mapTo(null));
    const zero$ = new Subject();
    const stateChange$ = this.d.obs$.pipe(mapTo(null));
    this.intervalObs$ = merge(start$, pause$, reset$, stateChange$, zero$).pipe(
      switchMap(isCounting => {
        if (isCounting === null) { return of(null); }
        return isCounting ? interval(1000) : of();
      }),
      scan((accumulatedValue, currentValue) => {
        if (accumulatedValue === 0 && currentValue !== null) {
          zero$.next(null);
          return accumulatedValue;
        }
        if (currentValue === null || !accumulatedValue) { return this.d.getTotalSeconds(); }
        // return --accumulatedValue;
      })
    );
    // End 3.1
  }

}
