import { Routes } from '@angular/router'

import{
      FirstComponent,
      SecondComponent,
      ParentLocalOutputComponent,
      ParentLocalVariableComponent,
    } from './index';

export const appRoutes: Routes = [
    { path: '', component: FirstComponent },
    { path: 'second-input', component: SecondComponent },
    { path: 'parent-output', component: ParentLocalOutputComponent },
    { path: 'parent-local-variable', component: ParentLocalVariableComponent },

]


// import { FirstComponent } from './components/first/first.component'
// import { SecondComponent } from './components/second-input/event-details/second.component'
// import { ParentLocalOutputComponent } from './components/third-output/parent.component'
// import { ParentLocalVariableComponent } from './components/fourth-local-variables/parent-local.component'