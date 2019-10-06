/**
 * 
 */

import { GeolocationCoordinateModel as GeolocationCoordinate } from './geolocation-coordinate-model.model';
import { CurrencieModel as Currencie} from './currencie-model.model';
import { TranslationModel as Translation } from './translation-model.model';

export class CountryModel {
  numericCode: string;
  alpha2Code: string; 
  alpha3Code: string;
  name: string;
  nameTranslations: Translation[];
  callingCodes: Array<string>;
  capital: string;
  region: string;
  geolocationCoordinate?: GeolocationCoordinate;
  flag: string;
  currencies: Currencie[];
}