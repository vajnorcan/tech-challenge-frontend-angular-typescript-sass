import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.scss']
})
export class SorterComponent implements OnInit {

  @Input()
  properties: string[];

  @Output()
  propertyChange = new EventEmitter();

  public isAsc = true;
  public arrDown = '&darr;';
  public arrUp = '&uarr;';
  public selectedProperty = null;

  constructor() { }

  ngOnInit() {
  }

  public onClick(idx: number): void {
    const property = this.properties[idx];
    if (this.selectedProperty && this.selectedProperty === property) {
      // Switch the direction of sorting
      this.isAsc = !this.isAsc;
    }
    this.selectedProperty = property;
    this.propertyChange.emit({
      property: this.selectedProperty,
      isAsc: this.isAsc
    });
  }
}
