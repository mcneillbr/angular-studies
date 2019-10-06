/**
 * Creates a new TranslationModel.
 * @class
 * @classdesc class responsible for maintaining tag translation relationship.
 */
export class TranslationModel {
    /** @description label in format slug name string */
    label: string;
    /** @description countryCode iso3 format max 3 letters */
    countryCode: string;
    /** @description language code iso format*/
    langCode: string;
    /** @description language name */
    langName: string;
    /** @description language name */
    text: string;
    
    constructor(
      label: string,
      countryCode: string,
      langCode: string,
      langName: string,
      text: string
      ) {
        this.label = label;
        this.countryCode = countryCode;
        this.langCode = langCode;
        this.langName = langName;
        this.text = text;
    }
}