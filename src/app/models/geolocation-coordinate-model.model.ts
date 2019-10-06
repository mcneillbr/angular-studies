/**
 * Model Address Location
 * https://w3c.github.io/geolocation-api/
 */

export class GeolocationCoordinateModel {
  /**
   * 
   */
  latitude: string; // specified in decimal degrees
  longitude: string; // specified in decimal degrees
  
  constructor(lat: string, lng: string) {
    this.latitude = lat;
    this.longitude = lng;
  }
}