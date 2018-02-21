import { TestBed, async } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NotifierModule } from 'angular-notifier';
import { EventsComponent } from 'app/events/events.component';
import { SearchComponent } from 'app/events/search/search.component';
import { SorterComponent } from 'app/events/sort/sorter.component';
import { EventListComponent } from 'app/events/event-list/event-list.component';
import { EventItemComponent } from 'app/events/event-list/event-item.component';
import { HighlightSearchPipe } from 'app/api/highlight-search.pipe';
import { ListEventsService } from 'app/api/list-events.service';

import * as _ from 'underscore';
import * as deepClone from 'underscore.deepclone';
_.mixin(deepClone);

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NotifierModule,
        HttpModule
      ],
      declarations: [
        AppComponent,
        EventsComponent,
        SearchComponent,
        SorterComponent,
        EventListComponent,
        EventItemComponent,
        HighlightSearchPipe
      ],
      providers: [
        ListEventsService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'bridj-tech-challenge'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('bridj-tech-challenge');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Events');
  }));
});
