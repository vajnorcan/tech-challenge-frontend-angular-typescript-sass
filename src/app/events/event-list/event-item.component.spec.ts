import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventItemComponent } from './event-item.component';
import { HighlightSearchPipe } from 'app/api/highlight-search.pipe';

describe('EventItemComponent', () => {
  let component: EventItemComponent;
  let fixture: ComponentFixture<EventItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventItemComponent,
        HighlightSearchPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
