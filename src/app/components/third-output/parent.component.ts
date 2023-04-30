import { Component } from '@angular/core';

// @Output() lets a child component update data in the parent component.
// From child to parent component

@Component({
    selector: 'parent-output',
    template: `
    <div *ngIf="currentCounter">
      <h1>Congratulations!</h1>
      <h3>You set the parent's counter to: {{currentCounter}}</h3>
    </div>
    <child-output (buttonClick)="handleChildButtonClick($event)">
    <br>
    <div>
      <p>third works!</p>
    </div>
    `
})
export class ParentLocalOutputComponent {
    currentCounter: any

    handleChildButtonClick(value: any) {
        this.currentCounter = value
    }
}

