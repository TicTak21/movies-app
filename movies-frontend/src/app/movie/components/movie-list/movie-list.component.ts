import { LyTheme2 } from '@alyle/ui';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const style = {
  listHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1em',
    flexWrap: 'wrap',
  },
  listTitle: {
    display: 'flex',
    alignItems: 'center',
  },
};

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Input()
  public movies$: Observable<[]> = new Observable<[]>();

  public activeFilter = 'views';

  public readonly classes = this.theme.addStyleSheet(style);

  constructor(private readonly theme: LyTheme2) {}

  public getSortConfig() {
    return {
      prop: this.activeFilter,
      order: 'ASC',
    };
  }

  ngOnInit(): void {}
}
