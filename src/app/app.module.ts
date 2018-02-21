import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 3rd Party Imports
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { HighlightModule } from 'ngx-highlight';
import * as _ from 'underscore';
import * as deepClone from 'underscore.deepclone';

import { AppComponent } from './app.component';
import { HighlightSearchPipe } from './api/highlight-search.pipe';
import { ListEventsService } from './api/list-events.service';
import { EventsComponent } from './events/events.component';
import { SearchComponent } from './events/search/search.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventItemComponent } from './events/event-list/event-item.component';
import { SorterComponent } from './events/sort/sorter.component';
import { ApiComponent } from './csharpapi/api.component';

/** Mixin the deepclone plugin into underscore as _.clone it's shallow copy only */
_.mixin(deepClone);

/** Angular-Notifier config */
const angularNotifierConfig: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right'
    },
    vertical: {
      position: 'top'
    }
  },
  behaviour: {
    autoHide: 3000
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HighlightSearchPipe,
    EventsComponent,
    SearchComponent,
    EventListComponent,
    EventItemComponent,
    SorterComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NotifierModule.withConfig(angularNotifierConfig),
    HighlightModule
  ],
  providers: [ ListEventsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
