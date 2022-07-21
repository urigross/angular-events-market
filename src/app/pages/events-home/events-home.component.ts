import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { SummerEvent } from 'src/app/models/summerEvent.model';
import { FilterService } from 'src/app/services/filter-service';
import { HttpService } from 'src/app/services/http-service';


@Component({
  selector: 'app-events-home',
  templateUrl: './events-home.component.html',
  styleUrls: ['./events-home.component.scss']
})
export class EventsHomeComponent implements OnInit {

  public summerEvents: SummerEvent[] = [];
  // public posts: Post[] = [];
  // public posts =new Array<any>();

  constructor(private httpService: HttpService, private filterService: FilterService) { }

  ngOnInit(): void {
    this.getSummerEvents();

  }
  getSummerEvents(): void {
    this.httpService.getPosts().subscribe(response => {
      // this.posts = response;
      this.summerEvents = this.filterService.getFutureSummerEvents(this.summerEvents);
      this.summerEvents = this.httpService.getSummerEvents(response);
      this.summerEvents = this.httpService.getDateSortedPosts(this.summerEvents);      // Sort them by date.
    });
    // this.httpService.getPosts()
    // .subscribe(posts => {
    //     this.posts = posts;
    //   });
  }


}
