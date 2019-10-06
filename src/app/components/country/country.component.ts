import { Component, OnInit, Inject } from '@angular/core';
import { CountryService } from './../../services/country.service';
import { CountryModel } from '../../models/country-model.model';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countries: CountryModel[];

  constructor(
    @Inject(CountryService) private countryService: CountryService,
    @Inject(SharedDataService) private shareData: SharedDataService
    ) { }

  ngOnInit() {
    this.countryService.getAll().subscribe((res) => {
      // console.log('country', res);
      this.countries = res;
      this.shareData.changeData({time: new Date(), data: 'CountryComponent:load'});
    });
    this.shareData.data.subscribe((data: any) => {
      console.log('CountryComponent:get.data', data);
    });
  }

}
