import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './successalert/successalert.component';
import { WarningAlertComponent } from './warningalert/warningalert.component';

import { UserInputComponent } from './user-input/user-input.component';
import { DisplayDetailsComponent } from './display-details/display-details.component'

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    DisplayDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
