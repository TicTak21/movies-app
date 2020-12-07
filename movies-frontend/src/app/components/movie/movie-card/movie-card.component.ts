import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LySnackBar } from '@alyle/ui/snack-bar';
import { ThemeVariables, shadowBuilder, LyTheme2 } from '@alyle/ui';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';
import { LyDialog } from '@alyle/ui/dialog';
import { ShareDialogComponent } from 'src/app/components/share-dialog/share-dialog.component';

const styles = (theme: ThemeVariables) => ({
  wrapper: {
    background: theme.background.tertiary,
    borderRadius: '4px',
    boxShadow: shadowBuilder(1),
    padding: '1em',
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
  @Input() public movie!: IMovie;
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
    const dialogRef = this.dialog.open<ShareDialogComponent>(
      ShareDialogComponent,
    );
    dialogRef.afterClosed.subscribe(result => console.log(result));
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
