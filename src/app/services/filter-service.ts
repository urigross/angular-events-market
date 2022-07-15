import { Injectable } from '@angular/core';
import { SummerEvent } from '../models/summerEvent.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  getFutureSummerEvents(summerEvents:SummerEvent[]):SummerEvent[]{
    var filteredSummerEvents: SummerEvent[] = structuredClone(summerEvents);
    filteredSummerEvents = filteredSummerEvents.filter(summerEvent=>summerEvent.dateWithTime > new Date());
    return filteredSummerEvents;
  }
}
