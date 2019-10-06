import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(Router) private router: Router,
  ) { }

  ngOnInit() {

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log('paramMap', params.get('id'));
        return of(params.get('id'));
      }
      )
    );
  }

  onGoToClick(path) {
    this.router.navigate([path]);
  }

}