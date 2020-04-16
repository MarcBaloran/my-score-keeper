import { TimeFormatPipe } from './pipes/TimeFormat.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { TimerComponent } from './timer/timer.component';
import { InputToCountdownDirective } from './directives/InputToCountdown.directive';
import {InputTimerValueComponent} from './timer/input-timer-value/input-timer-value.component';

@NgModule({
   declarations: [
      AppComponent,
      ScoreComponent,
      TimerComponent,
      InputToCountdownDirective,
      InputTimerValueComponent,
      TimeFormatPipe
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [TimeFormatPipe],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
