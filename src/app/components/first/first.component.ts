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
    this.router.navigate(['/event-ng4'], {});
   }

   goToFive(){
    this.router.navigate(['/event-styles'], {});
   }

   goToSix(){
    this.router.navigate(['/event-ng4'], {});
   }

   goToSeventh(){
    this.router.navigate(['/swapi'], {});
   }

   goToEight(){
    this.router.navigate(['/postman'], {});
   }

   goToNinth(){
    this.router.navigate(['/ng-if'], {});
   }

   goToTenth(){
    this.router.navigate(['/ng-switch'], {});
   }

   goToEleventh(){
    this.router.navigate(['/ng-class-style'], {});
   }

   goToEleventhNgStyle(){
    this.router.navigate(['/ng-style'], {});
   }

   goToTwelfth(){
    this.router.navigate(['/twelfth'], {});
   }
}

