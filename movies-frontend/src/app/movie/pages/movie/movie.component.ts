import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from 'src/app/movie/movie.interface';
import { MovieService } from 'src/app/movie/services/movie.service';

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
    this.movies$ = this.movieService.getAllMovies();
  }
}
