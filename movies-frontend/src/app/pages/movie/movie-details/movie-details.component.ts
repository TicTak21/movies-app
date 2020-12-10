import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';
import { MovieService } from 'src/app/shared/services/movie/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  public movie: IMovie = {} as IMovie;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly movieService: MovieService,
  ) {}

  ngOnInit(): void {
    const paramId = this.activatedRoute.snapshot.params.id;

    if (paramId != null) {
      this.movieService
        .getMovieById(paramId)
        .subscribe(movie => (this.movie = movie));
    }
  }
}
