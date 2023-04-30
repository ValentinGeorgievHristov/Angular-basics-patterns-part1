import { Component } from '@angular/core'
import { TwelfthService } from './twelfth.service'

@Component({
  selector: 'twelfth',
  templateUrl: './twelfth.component.html',
  styles: [`
    th, td { font-size: 16px; padding:5px 10px;}
  `]
})
export class TwelfthComponent {
  constructor(private twelfService:TwelfthService) {

  }
  events = this.twelfService.getEvents()

}