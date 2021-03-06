import { LyTheme2 } from '@alyle/ui';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/movie/services/movie.service';
import { IMovie } from '../../movie.interface';

const styles = {
  root: {
    display: 'grid',
    gap: '0.5em',
  },
};

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  public movie$: Observable<IMovie> = new Observable<IMovie>();
  public movieVideoUrl = '';

  public classes = this.theme.addStyleSheet(styles);

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly movieService: MovieService,
    private readonly theme: LyTheme2,
  ) {}

  ngOnInit(): void {
    const paramId = this.activatedRoute.snapshot.params.id;

    if (paramId != null) {
      this.movie$ = this.movieService.getMovieById(paramId);
    }
  }
}
