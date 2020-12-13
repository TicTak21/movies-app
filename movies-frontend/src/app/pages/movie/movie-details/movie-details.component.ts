import { LyTheme2 } from '@alyle/ui';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/shared/services/movie/movie.service';

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
  public movie$: Observable<[]> = new Observable<[]>();
  public movieVideoUrl: any = '';

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
