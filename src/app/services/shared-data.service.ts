import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const data = {time: new Date(), data: null};

@Injectable()
export class SharedDataService {

  private dataSource: BehaviorSubject<{time: Date, data: any}> = new BehaviorSubject(data);

  private currentData = this.dataSource.asObservable();
  constructor() { }

  changeData(value: {time: Date, data: any} ): void {
    this.dataSource.next(value);
  }

  get data() {
    return this.currentData;
  }

}
