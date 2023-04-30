import { Component } from '@angular/core';
import { FirstModel } from './first.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html'
})
export class FirstComponent {
  event : FirstModel =
   {name:'ngConf 2025',
   date: '3/1/2025',
   time: '8am',
   location:
   {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}}

   constructor(private router: Router) {

  }

   goToTwo(){
    this.router.navigate(['/second-input'], {});
   }

   goToThree(){
    this.router.navigate(['/parent-output'], {});
   }

   goToFour(){
    this.router.navigate(['/parent-local-variable'], {});
   }

   goToFive(){
    this.router.navigate(['/parent-local-variable'], {});
   }
}

