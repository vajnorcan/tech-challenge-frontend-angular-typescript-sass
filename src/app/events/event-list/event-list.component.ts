import { Component, Input, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { Event } from '../../api/classes/Event';
import * as _ from 'underscore';
import { ListEventsService } from '../../api/list-events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventListComponent implements OnInit {

  private _filter: string;

  /**
   * Client accounts collection
   */
  private _events: Event[];

  @Input()
  set events(data: Event[]) {
    if (data && data.length > 0) {
      this._events = data;
    }
    else {
      this._events = null;
    }
    console.log('[EventListComponent]: new events: ', this._events);
  }
  get events() {
    return this._events;
  }

  @Input()
  set filter(searchStr: string) {
    this._filter = searchStr;
    console.log('[EventListComponent]: filter: ', this._filter);
  }
  get filter(): string {
    return this._filter;
  }

  constructor(private listEvents: ListEventsService) { }

  ngOnInit() {
  }

  public clearFilter(): void {
    this.listEvents.clearFilter();
  }

}
