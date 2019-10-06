import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Location } from '@angular/common';

@Injectable()
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(@Inject(Location) private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}