import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { NotifierModule } from 'angular-notifier';

import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventItemComponent } from './event-list/event-item.component';
import { SearchComponent } from './search/search.component';
import { SorterComponent } from './sort/sorter.component';
import { HighlightSearchPipe } from 'app/api/highlight-search.pipe';
import { ListEventsService } from 'app/api/list-events.service';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        NotifierModule
      ],
      declarations: [
        EventListComponent,
        EventItemComponent,
        EventsComponent,
        SearchComponent,
        SorterComponent,
        HighlightSearchPipe
      ],
      providers: [
        ListEventsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
