import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent, CameraComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
