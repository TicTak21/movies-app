import { Component, OnInit } from '@angular/core';
import {
  ThemeVariables,
  ThemeRef,
  lyl,
  StyleRenderer,
  LyTheme2,
} from '@alyle/ui';
import { ThemeMinimaDark } from '@alyle/ui/themes/minima';
import { MoviesService } from './services/movies/movies.service';
import { Observable } from 'rxjs';

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
export class AppComponent implements OnInit {
  readonly classes = this.sRenderer.renderSheet(STYLES, true);
  movies$: Observable<any> | undefined;

  constructor(
    readonly sRenderer: StyleRenderer,
    private theme: LyTheme2,
    private readonly movieService: MoviesService,
  ) {}

  setTheme() {
    if (this.theme.variables.name === 'minima-light') {
      this.theme.setTheme('minima-dark');
      return;
    }

    this.theme.setTheme('minima-light');
  }

  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies();
  }
}
