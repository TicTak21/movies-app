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
  setTheme!: () => void;

  @Input()
  toggleDrawer!: () => void;

  classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}

  ngOnInit(): void {}
}
