import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { InputToCountdownDirective } from 'src/app/directives/InputToCountdown.directive';

@Component({
  selector: 'app-input-timer-value',
  templateUrl: './input-timer-value.component.html',
  styleUrls: ['./input-timer-value.component.css']
})
export class InputTimerValueComponent implements OnInit {

  constructor(public d: InputToCountdownDirective) { }

  ngOnInit() {
  }

}
