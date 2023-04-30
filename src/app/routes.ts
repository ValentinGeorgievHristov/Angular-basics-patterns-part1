import { Routes } from '@angular/router'

import{
      FirstComponent,
      SecondComponent,
      ParentLocalOutputComponent,
      ParentLocalVariableComponent,
      EventStylesComponent,
      EventsNg4Component,
      SwapiComponent,
      PostmanComponent,
    } from './index';

export const appRoutes: Routes = [
    { path: '', component: FirstComponent },
    { path: 'second-input', component: SecondComponent },
    { path: 'parent-output', component: ParentLocalOutputComponent },
    { path: 'parent-local-variable', component: ParentLocalVariableComponent },
    { path: 'event-styles', component: EventStylesComponent },
    { path: 'event-ng4', component: EventsNg4Component },
    { path: 'swapi', component: SwapiComponent },
    { path: 'postman', component: PostmanComponent },

]


// import { FirstComponent } from './components/first/first.component'
// import { SecondComponent } from './components/second-input/event-details/second.component'
// import { ParentLocalOutputComponent } from './components/third-output/parent.component'
// import { ParentLocalVariableComponent } from './components/fourth-local-variables/parent-local.component'