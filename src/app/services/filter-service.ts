import { Injectable } from '@angular/core';
import { SummerEvent } from '../models/summerEvent.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  getFutureSummerEvents(summerEvents: SummerEvent[]): SummerEvent[] {
    var filteredSummerEvents: SummerEvent[] = structuredClone(summerEvents);
    filteredSummerEvents = filteredSummerEvents.filter(summerEvent => summerEvent.dateWithTime > this._getstartFilteringDate());
    return filteredSummerEvents;
  }

  private _getstartFilteringDate(): Date {
    var startDate: Date = new Date;
    startDate.setDate(startDate.getDate());
    startDate.setHours(0, 0, 0, 0);
    return startDate;
  }
}
