import { LyTheme2, shadowBuilder, ThemeVariables } from '@alyle/ui';
import { LyDialog } from '@alyle/ui/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { ShareDialogComponent } from 'src/app/shared/components/share-dialog/share-dialog.component';
import { IActor } from '../../actor.interface';

const style = (theme: ThemeVariables) => ({
  wrapper: {
    background: theme.background.tertiary,
    borderRadius: '4px',
    boxShadow: shadowBuilder(2),
  },
  cardActions: {
    textAlign: 'right',
  },
});

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss'],
})
export class ActorCardComponent implements OnInit {
  @Input() public actor: IActor = {} as IActor;

  public isLiked = false;
  public isBookmarked = false;

  public readonly classes = this.theme.addStyleSheet(style);

  constructor(
    private readonly dialog: LyDialog,
    private readonly theme: LyTheme2,
  ) {}

  public openDialog() {
    this.dialog.open<ShareDialogComponent>(ShareDialogComponent);
  }

  public handleLike() {
    this.isLiked = !this.isLiked;
  }

  public handleBookmark() {
    this.isBookmarked = !this.isBookmarked;
  }

  public getActorAge() {
    if (!this.actor.born) {
      return 'Unknown';
    }

    const now = new Date().getFullYear();

    const parsedBorn = parseInt(this.actor.born, 10);
    const bornDate = new Date(parsedBorn).getFullYear();

    return now - bornDate;
  }

  ngOnInit(): void {}
}
