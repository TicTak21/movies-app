import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss'],
})
export class SelectFilterComponent implements OnInit {
  public selected = 1;

  constructor() {}

  ngOnInit(): void {}
}
