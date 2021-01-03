import { LyTheme2 } from '@alyle/ui';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../../movie.interface';
import { MovieService } from '../../services/movie.service';

const style = {
  listHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1em',
    flexWrap: 'wrap',
  },
  listTitle: {
    display: 'flex',
    alignItems: 'center',
  },
};

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  public movies$: Observable<IMovie[]> = new Observable<IMovie[]>();

  public activeFilter = 'views_ASC';

  public readonly classes = this.theme.addStyleSheet(style);

  constructor(
    private readonly theme: LyTheme2,
    private readonly movieService: MovieService,
  ) {}

  public getSortConfig() {
    const [prop, order] = this.activeFilter.split('_');

    return {
      prop,
      order,
    };
  }

  ngOnInit(): void {
    this.fetchMovies();
  }

  private fetchMovies(): void {
    this.movies$ = this.movieService.getAllMovies();
  }
}
