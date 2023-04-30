import { Component, EventEmitter, Output } from '@angular/core';

// @Output() lets a child component update data in the parent component.
// From child to parent component

@Component({
  selector: 'child-output',
  template: `
   <div>
     <h1>Third Component @Output</h1>
     <h3>Child Counter: {{counter}}</h3>
     <button class="btn btn-primary" (click)="buttonClicked()">Click Me!</button>
     <br>
     <button routerLink="/">Back to One</button>
   </div>
  `
})
export class ChildOutputComponent {
    @Output() buttonClick = new EventEmitter()
    counter:number = 0

    ngOnInit() {
      setInterval(() => {this.counter++}, 1000)
    }

    buttonClicked() {  // generics suntax on the bottom
        this.buttonClick.emit(this.counter)
      }
}

// ----------------------
// GENERICS

// buttonClicked<T>(value: T): void {
//   this.buttonClick.emit(value);
// }

// this.buttonClicked<number>(10); // Emit number value 10
// this.buttonClicked<string>("hello"); // Emit string value "hello"
// this.buttonClicked<boolean>(true); // Emit boolean value true