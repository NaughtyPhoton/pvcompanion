import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TrainingComponent } from './auth/training/training.component';
import { CoachSessionComponent } from './coach/coach-session/coach-session.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent, LoginComponent, SignupComponent, TrainingComponent, CoachSessionComponent, WelcomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
