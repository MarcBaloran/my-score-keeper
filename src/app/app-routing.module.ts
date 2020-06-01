import { TutorialComponent } from './components/settings/tutorial/tutorial.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreKeeperComponent } from './components/score-keeper/score-keeper.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/score-keeper' , pathMatch: 'full'},
  {path: 'score-keeper', component: ScoreKeeperComponent
  // , children: [
  // {path: ':id/:name', component: UserComponent}]
  },
  {path: 'settings', component: SettingsComponent
    , children: [
    // {path: '', component: RecipeStartComponent},
    {path: 'tutorial', component: TutorialComponent}]
    // {path: ':id', component: RecipeDetailComponent},
    // {path: ':id/edit', component: RecipeEditComponent}]
  },
  /* catch all path (Note: need to be place at the last so i does not overwrite all path)*/
  {path: '**', redirectTo: '/score-keeper' , pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      // {useHash: true}
      )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
