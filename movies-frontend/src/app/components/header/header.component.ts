import { Component, Input, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

const styles = {
  title: {
    flexGrow: 1,
    display: 'flex',
    gap: '1em',
    alignItems: 'center',
  },
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  public setTheme: () => void;

  @Input()
  public toggleDrawer: () => void;

  public readonly classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {
    this.setTheme = (): void => {};
    this.toggleDrawer = (): void => {};
  }

  ngOnInit(): void {}
}
