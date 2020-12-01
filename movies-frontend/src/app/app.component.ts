import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ThemeVariables,
  ThemeRef,
  lyl,
  StyleRenderer,
  LyTheme2,
} from '@alyle/ui';
import { LyDrawer } from '@alyle/ui/drawer';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

const STYLES = (theme: ThemeVariables, ref: ThemeRef) => {
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

const EXPANDED = '250px over@XSmall';
const DEFAULT = '56px over@XSmall';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StyleRenderer],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  @ViewChild('drawer')
  public drawer!: LyDrawer;

  public readonly _classes = this.sRenderer.renderSheet(STYLES, true);

  public expanded = false;
  public readonly hasBackdrop: boolean | null = false;

  get width() {
    return this.expanded ? EXPANDED : DEFAULT;
  }

  constructor(readonly sRenderer: StyleRenderer, private theme: LyTheme2) {}

  ngOnInit(): void {}

  public prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  public toggleExpanded(): void {
    this.expanded = !this.expanded;
  }

  public toggleDrawer = (): void => {
    this.drawer.toggle();
  };

  public setTheme(): void {
    if (this.theme.variables.name === 'minima-light') {
      this.theme.setTheme('minima-dark');
      return;
    }

    this.theme.setTheme('minima-light');
  }
}
