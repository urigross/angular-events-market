import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { SummerEvent } from 'src/app/models/summerEvent.model';
import { HttpService } from 'src/app/services/http-service';


@Component({
  selector: 'app-events-home',
  templateUrl: './events-home.component.html',
  styleUrls: ['./events-home.component.scss']
})
export class EventsHomeComponent implements OnInit {
  public summerEvents: SummerEvent[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getSummerEvents();
    
  }
  getSummerEvents(): void{
    this.httpService.getPosts()
    .subscribe(posts => {
      this.summerEvents = this.httpService.getSummerEvents(posts);
      this.summerEvents = this.httpService.getDateSortedPosts(this.summerEvents);      // Sort them by date.
      console.log(this.httpService.getSummerEvents(this.summerEvents));
    });
  }


}
