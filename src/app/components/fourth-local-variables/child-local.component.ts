import { Component, Output, EventEmitter } from '@angular/core';

//Using Local Variables To Interact With Child Components

@Component({
  selector: 'child-local-variable',
  template: `
  <div *ngIf="stopped">
        <h1>Congratulations!</h1>
        <h3>You stopped the child component's counter!</h3>
      </div>
      <h3>Child Counter: {{counter}}</h3>
  `
})
export class ChildLocalVariableComponent {

  stopped = false
  counter = 0
  intervalId: any
  testData: string = 'TEST DATA, IT WILL APPEAR IN PARENT COMP'

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.counter++
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.intervalId)
    this.stopped = true
  }
}
