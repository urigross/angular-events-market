import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Post } from '../models/post.model';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postsUrl = 'https://62cc2deea080052930a6d29b.mockapi.io/api/events/events';

  // getPosts() {
  //   return this.http.get<Post[]>(this.postsUrl);
  // }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this._handleError<Post[]>('getHeroes', []))
      );
  }
  private _handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
