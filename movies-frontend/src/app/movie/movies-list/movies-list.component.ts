import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  movies$: Observable<any> | undefined;

  constructor(private readonly movieService: MoviesService) {}

  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies();
  }
}
