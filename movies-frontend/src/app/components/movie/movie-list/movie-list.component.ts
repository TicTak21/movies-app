import { LyTheme2 } from '@alyle/ui';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const style = {
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

  public readonly classes = this.theme.addStyleSheet(style);

  constructor(private readonly theme: LyTheme2) {}

  ngOnInit(): void {}
}
