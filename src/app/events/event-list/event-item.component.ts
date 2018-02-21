import { Component, Input, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { Event } from '../../api/classes/Event';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventItemComponent implements OnInit {

  @Input()
  event: Event;

  @Input()
  filter: string;

  constructor() { }

  ngOnInit() {
  }

}
