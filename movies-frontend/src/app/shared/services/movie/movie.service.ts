import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../../../../../../shared/interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private readonly httpClient: HttpClient) {}

  public getMovies<T = IMovie>(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.url);
  }
}
