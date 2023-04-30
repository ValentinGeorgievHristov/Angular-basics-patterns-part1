import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

// import { FirstComponent } from './components/first/first.component';
// import { SecondComponent } from './components/second-input/event-details/second.component';
// import { EventAddressComponent } from './components/second-input/event-address.component';
// import { ParentLocalOutputComponent } from './components/third-output/parent.component';
// import { ChildOutputComponent } from './components/third-output/child.component';
// import { ParentLocalVariableComponent } from './components/fourth-local-variables/parent-local.component';
// import { ChildLocalVariableComponent } from './components/fourth-local-variables/child-local.component';

import{
  FirstComponent,
  SecondComponent,
  EventAddressComponent,
  ParentLocalOutputComponent,
  ChildOutputComponent,
  ParentLocalVariableComponent,
  ChildLocalVariableComponent
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

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
