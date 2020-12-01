import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LySnackBar } from '@alyle/ui/snack-bar';
import { ThemeVariables, shadowBuilder, LyTheme2 } from '@alyle/ui';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';

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
  @Input() public movie!: IMovie;
  @ViewChild('sb')
  public sb!: LySnackBar;

  public isLiked = false;
  public isInWatchLater = false;

  public readonly classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}

  ngOnInit(): void {}

  public handleLike() {
    let msg = ``;
    if (this.isLiked) {
      msg += `Unliked`;
    } else {
      msg += `Liked`;
    }

    this.openSnack(msg);
    this.isLiked = !this.isLiked;
  }

  public handleWatchLater() {
    let msg = ``;
    if (this.isInWatchLater) {
      msg += `Removed from Watch later`;
    } else {
      msg += `Added to Watch later`;
    }
    this.openSnack(msg);
    this.isInWatchLater = !this.isInWatchLater;
  }

  private openSnack(msg: string): void {
    this.sb.open({
      msg,
    });
  }
}
