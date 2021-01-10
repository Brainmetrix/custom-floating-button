import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomFloatingButtonComponent } from './custom-floating-button/custom-floating-button.component';

import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CssOnlyFloatingBtnComponent } from './css-only-floating-btn/css-only-floating-btn.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomFloatingButtonComponent,
    CssOnlyFloatingBtnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
