import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import * as _ from 'lodash';
import { SummerEvent } from '../models/summerEvent.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  getFutureSummerEvents(summerEvents:SummerEvent[]):SummerEvent[]{
    var filteredSummerEvents: SummerEvent[] = _.cloneDeep(summerEvents);
    filteredSummerEvents = filteredSummerEvents.filter(summerEvent=>summerEvent.dateWithTime > new Date());
    return filteredSummerEvents;
  }
}
