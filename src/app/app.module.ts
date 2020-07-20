import { TimeFormatPipe } from './pipes/TimeFormat.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScoreComponent } from './components/score-keeper/score/score.component';
import { TimerComponent } from './components/score-keeper/timer/timer.component';
import { InputToCountdownDirective } from './directives/input-to-countdown/InputToCountdown.directive';
import { InputToTimerComponent } from './components/score-keeper/input-to-timer/input-to-timer.component';
import { TimeoutComponent } from './components/score-keeper/timer/timeout/timeout.component';
import { FoulsComponent } from './components/score-keeper/timer/fouls/fouls.component';
import { ToggleDirective } from './directives/toggle/toggle.directive';
import { HeaderComponent } from './components/header/header.component';
import { ScoreKeeperComponent } from './components/score-keeper/score-keeper.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AppRoutingModule } from './app-routing.module';
import { TutorialComponent } from './components/settings/tutorial/tutorial.component';
import { PossessionArrowComponent } from './components/score-keeper/timer/possession-arrow/possession-arrow.component';
import { TimeoutHighlightDirective } from './directives/timeout-highlight/timeout-highlight.directive';
import { PlayerListComponent } from './components/score-keeper/player-list/player-list.component';
import { PlayerItemComponent } from './components/score-keeper/player-list/player-item/player-item.component';
import { StoreModule } from '@ngrx/store';

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
      HeaderComponent,
      ScoreKeeperComponent,
      SettingsComponent,
      TutorialComponent,
      PossessionArrowComponent,
      TimeoutHighlightDirective,
      PlayerListComponent,
      PlayerItemComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      StoreModule.forRoot({}, {})
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
