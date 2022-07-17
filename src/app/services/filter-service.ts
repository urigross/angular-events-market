import { Injectable } from '@angular/core';
import { SummerEvent } from '../models/summerEvent.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  getFutureSummerEvents(summerEvents:SummerEvent[]):SummerEvent[]{
    var filteredSummerEvents: SummerEvent[] = structuredClone(summerEvents);
    filteredSummerEvents = filteredSummerEvents.filter(summerEvent=>summerEvent.dateWithTime > this._getstartFilteringDate() );
    return filteredSummerEvents;
  }
  private _getstartFilteringDate():Date{
    var startFilteringDate: Date = new Date;
    startFilteringDate.setDate(startFilteringDate.getDate()+1);
    startFilteringDate.setHours(0);
    startFilteringDate.setMinutes(0);
    return startFilteringDate;
  }
}
