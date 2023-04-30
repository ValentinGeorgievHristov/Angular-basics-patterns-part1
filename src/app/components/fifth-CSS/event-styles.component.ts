import { Component } from '@angular/core';

@Component({
  selector: 'event-styles',
  templateUrl: './event-styles.component.html',
  styles: [`
    .outer { display:inline-block; }
    .inner { margin-top: 30px; }
    .values { margin-left:10px; }
  `]
})
export class EventStylesComponent {
  eventStyle = {name:'ngConf 2025', date: '3/1/2025', time: '8am', location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}}
}
