import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {
  getfuturePosts(posts:Post[]):Post[]{
    var filteredPosts: Post[] = _.cloneDeep(posts);
    filteredPosts = filteredPosts.filter(post=>post.date); // TODO: contiue the function
    return filteredPosts;
  }

  constructor() { }
}
