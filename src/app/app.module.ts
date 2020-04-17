import { TimeFormatPipe } from './pipes/TimeFormat.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { TimerComponent } from './timer/timer.component';
import { InputToCountdownDirective } from './directives/InputToCountdown.directive';
import { InputToTimerComponent } from './input-to-timer/input-to-timer.component';

@NgModule({
   declarations: [
      AppComponent,
      ScoreComponent,
      TimerComponent,
      InputToCountdownDirective,
      TimeFormatPipe,
      InputToTimerComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
