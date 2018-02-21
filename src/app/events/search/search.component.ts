import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ListEventsService } from '../../api/list-events.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private _queryString: string;

  @Output() queryStrChange = new EventEmitter<string>();

  /*
  This is two-way data binding from the filter to the list component so it's notified when it gets changed.
   */
  @Input()
  set queryStr(val: string) {
    this._queryString = val;
    this.queryStrChange.emit(this._queryString);
  }
  get queryStr(): string {
    return this._queryString || '';
  }

  constructor(private listEvents: ListEventsService) {
    // Subscribe to any 'clear filter' events (other components might issue this, like 'clear' btn)
    this.listEvents.clearFilter$.subscribe(() => {
      this.clear();
    });
  }

  ngOnInit() {
  }

  onKey(event: any) { // without type info
    this.queryStr = event.target.value;
  }

  clear() {
    this.queryStr = '';
  }
}
