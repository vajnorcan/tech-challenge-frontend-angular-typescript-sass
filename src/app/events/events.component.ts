import { Component, ChangeDetectionStrategy, NgZone, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { NotifierService } from 'angular-notifier';

import { Event } from '../api/classes/Event';

import * as _ from 'underscore';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class EventsComponent implements OnInit {

  public queryString: string;
  public availableOnly = false;
  public sortProperty: string;
  public sortIsAsc: string;

  // Holds all the data. Consider this as the cached version. Not entirely necessary in this scenario...
  private data: Event[];

  // Holds all the data that we will be filtering on (copy)
  private events: Event[];

  constructor(private http: Http,
    private ngZone: NgZone,
    private notifier: NotifierService) {

    // Get the data from file system
    this.getJSON().subscribe(sampleData => {
      this.data = sampleData;
      // Create a deep clone of the data for the filtering.
      this.events = _.deepClone(this.data);
    }, error => this.notifier.notify('error', 'Unable to read the sample data'));
  }

  ngOnInit() {
  }

  /**
   * Get the Events data from the endpoint (or API).
   * @returns {Observable<ClientAccount>} Content
   */
  public getJSON(): Observable<any> {
    return this.http.get('https://s3-ap-southeast-2.amazonaws.com/bridj-coding-challenge/events.json')
      .map((res: any) => res.json().events as Event[]);
  }

  /**
   * On filter change handler for the sSearchComponent event.
   * @param queryStr
   */
  public onFilterChanged(queryStr: string): void {
    this.queryString = queryStr;
    this.filter();
  }

  public onSortPropertyChanged(sortObj): void {
    this.sortProperty = sortObj.property;
    this.sortIsAsc = sortObj.isAsc;
    this.sortData();
  }

  public filter(): void {
    this.filterAvailableOnly();
    this.filterData();
    this.sortData();
  }

  /**
   * Filters out all the unavailable events. This is the only filter that clones the 'cached' data (thoufh cloning is not necessary here)
   * All other filters are using the result of this filter (this.events object)
   */
  private filterAvailableOnly(): void {
    if (this.availableOnly) {
      this.events = _.filter(this.data, function (eventItem: Event) {
        return eventItem.available_seats &&  eventItem.available_seats > 0;
      });
    }
    else {
      this.events = _.deepClone(this.data);
    }
  };

  /**
   * Filters the data according the requirements. It searhes for the name of the venue. If the filter is empty, it returns all of them.
   */
  private filterData(): void {
    if (this.queryString && this.queryString !== '') {
      const scope = this;
      this.events = _.filter(this.events, function (eventItem: Event) {
          return eventItem.venue.toLowerCase().lastIndexOf(scope.queryString.toLowerCase()) > -1;
      });
    }
  }

  /**
   * Sorts the data based on the current sorting property.
   */
  private sortData(): void {
    if (!this.events) {
      return;
    }
    this.events = _.sortBy(this.events, this.sortProperty);
    if (!this.sortIsAsc) {
      this.events = this.events.reverse();
    }
  }


  public onCheckboxUpdate($event): void {
    this.availableOnly = $event.target.checked;
    this.filter();
  }

}
