import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isNumber } from 'util';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(Router) private router: Router,
    @Inject(SharedDataService) private shareData: SharedDataService
    ) {

      this.shareData.data.subscribe((dt => console.log('MainComponent:get.data', dt)));

    }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id =  params.get('id');
      console.log('/id', id);
      if (id && !isNaN(parseInt(id, 10))) {
        this.router.navigate(['/404']);
      }
    });
    this.shareData.changeData({time: new Date(), data: 'main-component.set'});
  }

}
