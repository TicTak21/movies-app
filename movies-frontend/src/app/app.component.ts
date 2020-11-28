import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ThemeVariables,
  ThemeRef,
  lyl,
  StyleRenderer,
  LyTheme2,
} from '@alyle/ui';
import { LyDrawer } from '@alyle/ui/drawer';

const STYLES = (theme: ThemeVariables, ref: ThemeRef) => {
  // eslint-disable-next-line no-underscore-dangle
  const __ = ref.selectorsOf(STYLES);
  return {
    $global: lyl`{
      body {
        background-color: ${theme.background.default}
        color: ${theme.text.default}
        font-family: ${theme.typography.fontFamily}
        margin: 0
        direction: ${theme.direction}
      }
    }`,
    root: lyl`{
      display: block
    }`,
  };
};

const DEFAULT = '250px over@XSmall';
const MINI = '56px over@XSmall';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StyleRenderer],
})
export class AppComponent implements OnInit {
  @ViewChild('drawer')
  drawer!: LyDrawer;

  readonly classes = this.sRenderer.renderSheet(STYLES, true);

  mini = false;

  get width() {
    return this.mini ? MINI : DEFAULT;
  }

  constructor(readonly sRenderer: StyleRenderer, private theme: LyTheme2) {}

  toggleMini(mini?: boolean) {
    this.mini = mini || !this.mini;
  }

  toggleDrawer = () => {
    this.drawer.toggle();
  };

  setTheme() {
    if (this.theme.variables.name === 'minima-light') {
      this.theme.setTheme('minima-dark');
      return;
    }

    this.theme.setTheme('minima-light');
  }

  ngOnInit(): void {}
}
