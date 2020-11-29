import { Component, Input, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { TVoidFunc } from 'src/types/event.types';

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
  public readonly classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}

  @Input()
  public toggleDrawer: TVoidFunc = () => {};

  @Input()
  public setTheme: TVoidFunc = () => {};

  ngOnInit(): void {}
}
