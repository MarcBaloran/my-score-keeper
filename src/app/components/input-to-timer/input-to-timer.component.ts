import { Component, OnInit } from '@angular/core';
import { InputToCountdownDirective } from 'src/app/directives/input-to-countdown/InputToCountdown.directive';

@Component({
  selector: 'app-input-to-timer',
  templateUrl: './input-to-timer.component.html',
  styleUrls: ['./input-to-timer.component.scss']
})
export class InputToTimerComponent implements OnInit {

  constructor(public d: InputToCountdownDirective) { }

  ngOnInit(): void {
  }

}
