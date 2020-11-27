import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LySnackBar } from '@alyle/ui/snack-bar';
import { ThemeVariables, shadowBuilder, LyTheme2 } from '@alyle/ui';

const styles = (theme: ThemeVariables) => ({
  wrapper: {
    boxShadow: shadowBuilder(1),
    background: theme.background.tertiary,
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    padding: '1em',
  },
  ctrlBlock: {
    width: '100%',
    textAlign: 'right',
  },
});

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  @ViewChild('sb')
  sb!: LySnackBar;

  readonly classes = this.theme.addStyleSheet(styles);

  constructor(private theme: LyTheme2) {}

  openSnack() {
    this.sb.open({
      msg: `Like action: ${this.movie.name}`,
    });
  }

  ngOnInit(): void {}
}
