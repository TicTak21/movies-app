import { Component, Input, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

const styles = {
  icon: {
    marginAfter: '.5em',
  },
  grow: {
    flexGrow: 1,
  },
  drawerContainer: {
    height: '100vh',
    transform: 'translate3d(0,0,0)',
  },
  drawerContent: {
    padding: '1em',
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

  classes = this.theme.addStyleSheet(styles);

  mode = 'over';
  hasBackdrop: boolean | null = true;

  constructor(private theme: LyTheme2) {}

  ngOnInit(): void {}
}
