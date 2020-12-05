import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemeVariables, lyl, StyleRenderer, LyTheme2 } from '@alyle/ui';
import { LyDrawer } from '@alyle/ui/drawer';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

const STYLES = (theme: ThemeVariables) => ({
  $global: lyl`{
      body {
        background-color: ${theme.background.default}
        color: ${theme.text.default}
        font-family: ${theme.typography.fontFamily}
        margin: 0
        direction: ${theme.direction}
      }
    }`,
});

const EXPANDED = '250px over@XSmall';
const DEFAULT = '56px over@XSmall';
const enum THEMES {
  dark = 'minima-dark',
  light = 'minima-light',
}

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

  public readonly classes = this.theme.addStyleSheet(STYLES);

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
    if (this.theme.variables.name === THEMES.light) {
      this.theme.setTheme(THEMES.dark);
      return;
    }

    this.theme.setTheme(THEMES.light);
  }
}
