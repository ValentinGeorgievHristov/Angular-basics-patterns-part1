import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { SwapiService } from './components/seventh-swapi/swapi.service';
import { TwelfthService } from './components/twelfth-simple-service/twelfth.service';

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
  NgIfComponent,
  NgSwitchComponent,
  NgClassStyleComponent,
  NgStyleComponent,
  TwelfthComponent
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
    PostmanComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgClassStyleComponent,
    NgStyleComponent,
    TwelfthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TwelfthService, SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
