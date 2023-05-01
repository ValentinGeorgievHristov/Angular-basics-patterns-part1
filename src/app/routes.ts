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
      NgIfComponent,
      NgSwitchComponent,
      NgClassStyleComponent,
      NgStyleComponent,
      TwelfthComponent,
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
    { path: 'ng-if', component: NgIfComponent },
    { path: 'ng-switch', component: NgSwitchComponent },
    { path: 'ng-class-style', component: NgClassStyleComponent },
    { path: 'ng-style', component: NgStyleComponent },
    { path: 'twelfth', component: TwelfthComponent },
]


