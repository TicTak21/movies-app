import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/shared/services/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public movies$: Observable<[]> = new Observable<[]>();

  constructor(private readonly movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  private fetchMovies(): void {
    this.movies$ = this.movieService.getMovies();
  }
}
