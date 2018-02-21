import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ListEventsService {
  public clearFilter$: EventEmitter<any>;

  constructor() {
    this.clearFilter$ = new EventEmitter();
  }

  public clearFilter(): void {
    this.clearFilter$.emit();
  }
}
