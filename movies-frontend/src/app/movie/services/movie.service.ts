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
  private readonly url: string = this.baseUrl + '/movies';

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  public getAllMovies<T = IMovie>(): Observable<T[]> {
    return this.httpClient
      .get<T[]>(this.url)
      .pipe(catchError(this.handleError<T[]>('getMovies', [])));
  }

  public getMovieById<T = IMovie>(id: string): Observable<T> {
    return this.httpClient
      .get<T>(this.url + `/${id}`)
      .pipe(catchError(this.handleError<T>('getMovieById')));
  }

  public async getMovieTrailer(title: string) {
    return await movieTrailer(title);
  }
}
