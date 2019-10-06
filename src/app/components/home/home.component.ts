import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import {Subject, Observable} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

showDivSubject: Subject<any> = new Subject<any>();
@Input('show') hasShow:boolean = true;
  constructor() {
    this.showDiv.subscribe((value) => console.log(value));
    this.showDivSubject.next(true);
    this.hasShow = false;
   }

  ngOnInit() {
    this.showDivSubject.next(false);
    this.hasShow = true;
  }

  ngAfterViewInit() {

    setTimeout(() => this.showDivSubject.next('true'), 2000);
    setTimeout(() => this.showDivSubject.next('B'), 9000);
    
  }

  get showDiv(): Observable<any> {
    return this.showDivSubject.asObservable();
  }

}