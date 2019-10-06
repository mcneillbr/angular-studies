import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { CountryModel } from "./../models/country-model.model";
import { GeolocationCoordinateModel } from "./../models/geolocation-coordinate-model.model";
import { CurrencieModel } from "./../models/currencie-model.model";
import { TranslationModel } from "./../models/translation-model.model";

const httpOptions = {
  // headers: new HttpHeaders({'Content-Type': 'application/json', })
};

/**
 *
 */
interface CurrencieResponse {
  readonly code: string;
  readonly name: string;
  readonly symbol: string;
}

interface TranslationResponse {
  [propName: string]: string;
}

@Injectable({ providedIn: "root" })
export class CountryService {
  constructor(@Inject(HttpClient) private http: HttpClient) {}

  getAll(): Observable<CountryModel[]> {
    return this.http
      .get("https://restcountries.eu/rest/v2/all", httpOptions)
      .pipe(
        map((res: any) => {
          if (!res) {
            throw new Error("Value expected!");
          }
          const countries: CountryModel[] = [];
          for (const item of res) {
            const m = new CountryModel();
            m.numericCode = item.numericCode;
            m.alpha2Code = item.alpha2Code;
            m.alpha3Code = item.alpha3Code;
            m.name = item.name;
            m.callingCodes = item.callingCodes;
            m.capital = item.capital;
            m.region = item.region;
            const lat = item.latlng[0];
            const lng = item.latlng[1];
            m.geolocationCoordinate = new GeolocationCoordinateModel(lat, lng);
            m.flag = item.flag;
            m.currencies = this.mapCurencies(item.currencies);
            m.nameTranslations = this.mapTranslations(
              item.alpha3Code,
              item.translations
            );
            countries.push(m);
          }

          // console.log('countries:res', res);

          return countries;
        }),
        catchError(err => of([]))
      );
  }

  private mapCurencies(res: CurrencieResponse[]): CurrencieModel[] {
    const c: CurrencieModel[] = [];

    res.forEach((item, idx) => {
      const crr = new CurrencieModel();
      crr.code = item.code;
      crr.name = item.name;
      crr.simbol = item.symbol;
      c.push(crr);
    });

    return c;
  }

  private mapTranslations(
    countryCode: string,
    t: TranslationResponse
  ): TranslationModel[] {
    const r: TranslationModel[] = [];

    for (const prop in t || {}) {
      if (!t.hasOwnProperty(prop)) {
        continue;
      }
      const label: string = prop;
      // const countryCode: string
      const langCode: string = prop;
      const langName: string = t[prop];
      const text: string = t[prop];
      const tmodel: TranslationModel = new TranslationModel(
        label,
        countryCode,
        langCode,
        langName,
        text
      );
      // console.log('mapTranslations', tmodel);
      r.push(tmodel);
    }

    return r;
  }
}
