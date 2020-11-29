import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private readonly httpClient: HttpClient) {}

  public getMovies(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }
}
