import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LySnackBar } from '@alyle/ui/snack-bar';
import { ThemeVariables, shadowBuilder, LyTheme2 } from '@alyle/ui';
import { LyDialog } from '@alyle/ui/dialog';
import { ShareDialogComponent } from 'src/app/shared/components/share-dialog/share-dialog.component';
import { IMovie } from '../../movie.interface';

const styles = (theme: ThemeVariables) => ({
  wrapper: {
    background: theme.background.tertiary,
    borderRadius: '4px',
    boxShadow: shadowBuilder(2),
    padding: '1em',
  },
  cardBody: {
    display: 'grid',
    gap: '0.5em',
  },
  cardCtrl: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent implements OnInit {
  @Input() public movie: IMovie = {} as IMovie;
  @ViewChild('sb')
  public sb!: LySnackBar;

  public isLiked = false;
  public isInWatchLater = false;

  public readonly classes = this.theme.addStyleSheet(styles);

  constructor(
    private readonly theme: LyTheme2,
    public readonly dialog: LyDialog,
  ) {}

  ngOnInit(): void {}

  public openDialog() {
    this.dialog.open<ShareDialogComponent>(ShareDialogComponent);
  }

  public handleLike() {
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
