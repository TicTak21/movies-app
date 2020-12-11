import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss'],
})
export class SelectFilterComponent implements OnInit {
  @Output()
  public activeFilterChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() public activeFilter = 'title';

  constructor() {}

  ngOnInit(): void {}
}
