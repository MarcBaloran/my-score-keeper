import { TimeFormatPipe } from './pipes/TimeFormat.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScoreComponent } from './components/score/score.component';
import { TimerComponent } from './components/timer/timer.component';
import { InputToCountdownDirective } from './directives/input-to-countdown/InputToCountdown.directive';
import { InputToTimerComponent } from './components/input-to-timer/input-to-timer.component';
import { TimeoutComponent } from './components/timer/timeout/timeout.component';
import { FoulsComponent } from './components/timer/fouls/fouls.component';
import { ToggleDirective } from './directives/toggle/toggle.directive';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
   declarations: [
      AppComponent,
      ScoreComponent,
      TimerComponent,
      InputToCountdownDirective,
      TimeFormatPipe,
      InputToTimerComponent,
      TimeoutComponent,
      FoulsComponent,
      ToggleDirective,
      HeaderComponent
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
