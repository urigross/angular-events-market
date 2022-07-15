import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Post } from '../models/post.model';
import { catchError, map, tap } from 'rxjs/operators';
import { SummerEvent } from '../models/summerEvent.model';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // postsUrl = 'https://62cc2deea080052930a6d29b.mockapi.io/api/events/events';
  postsUrl ='https://62d021b51cc14f8c08850b9c.mockapi.io/events';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        tap(_ => console.log('fetched posts')),
        catchError(this._handleError<Post[]>('getPosts', []))
      );
  }
  private _handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
  getSummerEvents(posts:Post[]):SummerEvent[]{
    var eventsToReturn: SummerEvent[]=[];
    posts.forEach(({date,day,startHour,endHour, details, url}) => {
      var dateStr = `${date}, ${startHour}`;
      var summerEvent: SummerEvent = {
        dateWithTime:new Date(dateStr),
        date,
        day,
        startHour,
        endHour,
        details,
        url
      }
      eventsToReturn.push(summerEvent);
    });
    return eventsToReturn;  
  }  

  getDateSortedPosts(summerEvents: SummerEvent[]){
    var summerEventsToReturn: SummerEvent[] = [...summerEvents]
    summerEventsToReturn.sort(function (a:SummerEvent, b:SummerEvent) {
      const dateA: any = a.dateWithTime, dateB: any = b.dateWithTime;
      return dateA - dateB;
    });
    return summerEventsToReturn;
  }
}
