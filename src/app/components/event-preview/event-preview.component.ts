import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { SummerEvent } from 'src/app/models/summerEvent.model';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.scss']
})
export class EventPreviewComponent implements OnInit {
  @Input() summerEvent!:SummerEvent;

  constructor() { }

  ngOnInit(): void {
  }

}
