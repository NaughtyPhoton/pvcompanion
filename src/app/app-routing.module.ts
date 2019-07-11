import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { WelcomeComponent } from './welcome/welcome.component'
import { SignupComponent } from './auth/signup/signup.component'

/*
import { MatchesComponent } from './matches/matches.component'
import { LiveStreamComponent } from './live-stream/live-stream.component'

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'livestream', component: LiveStreamComponent },
]
*/

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}