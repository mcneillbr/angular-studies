/**
 * Model Person
 */

import { AddressModel as Address } from './address-model.model';
import { PhoneModel as Phone } from './phone-model.model';

export class PersonModel {
  id: number;
  name: string;
  birthDate: Date;
  genderCode: string;
  email: string;
  address: Address[];
  phones: Phone[];


  get age(): number {
    const now = new Date();
    return this.birthDate && 'getFullYear' in this.birthDate ? now.getFullYear() - this.birthDate.getFullYear() : null;
  }
}