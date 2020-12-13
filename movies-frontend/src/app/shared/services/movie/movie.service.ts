import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IMovie } from '../../interfaces/movie.interface';
import movieTrailer from 'movie-trailer';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly baseUrl = 'https://movies-backend.vercel.app/movies';
  private readonly embedUrl = 'https://www.youtube.com/embed/';

  constructor(private readonly httpClient: HttpClient) {}

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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
