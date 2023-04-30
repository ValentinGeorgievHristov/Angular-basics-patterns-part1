import { Component, Input } from '@angular/core'
import { Location } from './second.model'

// @Input() lets a parent component update data in the child component.
// From parent to child component
@Component({
  selector: 'event-address',
  template: '<span>{{address.address}}, {{address.city}}, {{address.country}}</span>'
})
export class EventAddressComponent {

  @Input() address!: Location
}