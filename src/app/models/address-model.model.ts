/**
 * Model Address
 */

import { CountryModel as Country } from './country-model.model';
import { GeolocationCoordinateModel as GeolocationCoordinate } from './geolocation-coordinate-model.model';

export class AddressModel {
  id: number;
  address: string;
  addressSupplement?: string;
  addressNumber?: number;
  district: string;
  zipCode: string;
  city: string;
  state: string;
  country: Country; 
  geolocationCoordinate?: GeolocationCoordinate;
}