import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from '../../shared/services/base/base.service';
import { IActor } from '../actor.interface';

@Injectable({
  providedIn: 'root',
})
export class ActorService extends BaseService {
  constructor(private readonly httpClient: HttpClient) {
    super('/actors');
  }

  public getAllActors<T = IActor>(): Observable<T[]> {
    return this.httpClient
      .get<T[]>(this.baseUrl)
      .pipe(catchError(this.handleError<T[]>('getActors', [])));
  }

  public getActorById<T = IActor>(id: string): Observable<T> {
    return this.httpClient
      .get<T>(this.baseUrl + `/${id}`)
      .pipe(catchError(this.handleError<T>('getActorById')));
  }
}
