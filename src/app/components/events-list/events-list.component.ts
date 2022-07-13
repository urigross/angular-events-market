import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
@Input() posts!: Post[];
  constructor() { }

  ngOnInit(): void {
  }

  // trackByFn(idx: any, post: Post) {
  //   return post? post._id: undefined;
  // }

}
