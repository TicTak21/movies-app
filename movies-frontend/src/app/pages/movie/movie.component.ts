import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/shared/services/movie/movie.service';
import { IMovie } from '../../../../../shared/interfaces/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public movies$: Observable<IMovie[]> = new Observable<IMovie[]>();

  constructor(private readonly movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  private fetchMovies(): void {
    this.movies$ = this.movieService.getMovies();
  }
}
