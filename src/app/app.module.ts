import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';

import{
  FirstComponent,
  SecondComponent,
  EventAddressComponent,
  ParentLocalOutputComponent,
  ChildOutputComponent,
  ParentLocalVariableComponent,
  ChildLocalVariableComponent,
  EventStylesComponent,
  EventsNg4Component,
  SwapiComponent,
  PostmanComponent,
} from './index';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    EventAddressComponent,
    ParentLocalOutputComponent,
    ChildOutputComponent,
    ParentLocalVariableComponent,
    ChildLocalVariableComponent,
    EventStylesComponent,
    EventsNg4Component,
    SwapiComponent,
    PostmanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
