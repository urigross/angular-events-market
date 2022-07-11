import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { HttpService } from 'src/app/services/http-service';


@Component({
  selector: 'app-events-home',
  templateUrl: './events-home.component.html',
  styleUrls: ['./events-home.component.scss']
})
export class EventsHomeComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts(): void{
    this.httpService.getPosts()
    //return the top 5 heroes
      .subscribe(posts => this.posts = posts);
  }


}
