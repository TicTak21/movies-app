import { LyTheme2 } from '@alyle/ui';
import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';

const styles = {
  cardInfo: {
    display: 'flex',
    gap: '1em',
    flexWrap: 'wrap',

    '& > *': {
      display: 'flex',
      gap: '0.25em',
      alignItems: 'center',
    },
  },
};

@Component({
  selector: 'app-movie-card-info',
  templateUrl: './movie-card-info.component.html',
  styleUrls: ['./movie-card-info.component.scss'],
})
export class MovieCardInfoComponent implements OnInit {
  @Input() public rating = 0;
  @Input() public views = 0;
  @Input() public country = '';
  @Input() public adult = false;

  public readonly classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}

  ngOnInit(): void {}
}
