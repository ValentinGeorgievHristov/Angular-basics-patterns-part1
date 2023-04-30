import { Component } from '@angular/core';
//Using Local Variables To Interact With Child Components

@Component({
    selector: 'parent-local-variable',
    template: `
    <div>
    <h3>Using Local Variables To Interact With Child Components</h3>
    <child-local-variable #childRandomName></child-local-variable>
    <button class="btn btn-primary" (click)="childRandomName.stopTimer()">
    Stop Timer</button>
    <h5>Come from Child -> {{childRandomName.testData}}</h5>
    </div>

    `
})
export class ParentLocalVariableComponent {

}

