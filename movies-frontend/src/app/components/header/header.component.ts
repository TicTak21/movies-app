import { Component, Input, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

const styles = {
  nav: {
    flexGrow: 1,
    display: 'flex',
    gap: '1em',
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

  constructor(private readonly theme: LyTheme2) {}

  ngOnInit(): void {}
}
