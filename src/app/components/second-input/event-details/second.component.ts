import { Component } from '@angular/core';
import { Information } from '../second.model';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html'
})
export class SecondComponent {

  event :  Information  = {  // :  SecondModel
    name:'ngConf 2025',
    date: '3/1/2025',
    time: '8am',
    location: {
      address: '123 Main St',
      city: 'Salt Lake City, UT',
      country: 'USA'
    }
  }
}
