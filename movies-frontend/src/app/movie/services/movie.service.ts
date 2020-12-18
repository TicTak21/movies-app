import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IMovie } from '../movie.interface';
import movieTrailer from 'movie-trailer';
import { BaseService } from '../../shared/services/base/base.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService extends BaseService {
  constructor(private readonly httpClient: HttpClient) {
    super('/movies');
  }

  public getAllMovies<T = IMovie>(): Observable<T[]> {
    return this.httpClient
      .get<T[]>(this.baseUrl)
      .pipe(catchError(this.handleError<T[]>('getMovies', [])));
  }

  public getMovieById<T = IMovie>(id: string): Observable<T> {
    return this.httpClient
      .get<T>(this.baseUrl + `/${id}`)
      .pipe(catchError(this.handleError<T>('getMovieById')));
  }

  public async getMovieTrailer(title: string) {
    return await movieTrailer(title);
  }
}
