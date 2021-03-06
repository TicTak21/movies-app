import { LyTheme2 } from '@alyle/ui';
import { LyDialogRef } from '@alyle/ui/dialog';
import { ChangeDetectionStrategy, Component } from '@angular/core';

const styles = {
  dialog: {
    display: 'grid',
    justifyItems: 'center',
  },
};

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareDialogComponent {
  public readonly classes = this.theme.addStyleSheet(styles);

  constructor(
    public dialogRef: LyDialogRef,
    private readonly theme: LyTheme2,
  ) {}
}
