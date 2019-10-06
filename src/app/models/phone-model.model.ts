/**
 * Phone Model
 * https://countrycode.org/brazil
 */

export class PhoneTypeModel {
  PhoneTypeId: number;
  PhoneTypeName: string;
}

export class PhoneModel {
  id: number;
  phoneCode: number;
  phoneAreaCode: number;
  phoneNumber: number;
  phoneFormat: string;
  phoneType: PhoneTypeModel;
}