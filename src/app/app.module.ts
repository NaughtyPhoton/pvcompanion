import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CoachSessionComponent } from './coach/coach-session/coach-session.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module'


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    MaterialModule,
    AppRoutingModule
    ],
  declarations: [ 
    AppComponent, 
    LoginComponent, 
    SignupComponent, 
    CoachSessionComponent, 
    WelcomeComponent
    ],
  bootstrap:    [ 
    AppComponent
    ]
})
export class AppModule { }
