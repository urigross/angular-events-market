import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.model';
import { catchError, tap } from 'rxjs/operators';
import { SummerEvent } from '../models/summerEvent.model';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postsUrl ='https://api.npoint.io/1a46d5f836f7d9744e15';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        catchError(this._handleError<Post[]>('getPosts', []))
      );
  }
  private _handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  //Http Client get method
public getPosts2(): Observable<any> {
  return this.http.get<any>(this.postsUrl);
}
  getSummerEvents(posts:Post[]):SummerEvent[]{
    var eventsToReturn: SummerEvent[]=[];
    posts.forEach(({date, city,day,startHour,activityType,category, details, url}) => {
      var dateStr = `${date}T${startHour}:00`;
      console.log(dateStr)
      var summerEvent: SummerEvent = {
        dateWithTime:new Date(dateStr),
        day,
        city,
        activityType,
        category,
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
