import { Component } from '@angular/core';
import {
  ThemeVariables,
  ThemeRef,
  lyl,
  StyleRenderer,
  LyTheme2,
} from '@alyle/ui';
import { ThemeMinimaDark } from '@alyle/ui/themes/minima';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StyleRenderer],
})
export class AppComponent {
  readonly classes = this.sRenderer.renderSheet(STYLES, true);

  constructor(readonly sRenderer: StyleRenderer, private theme: LyTheme2) {}

  setTheme() {
    if (this.theme.variables.name === 'minima-light') {
      this.theme.setTheme('minima-dark');
      return;
    }

    this.theme.setTheme('minima-light');
  }
}
