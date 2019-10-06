/**
 * 
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable()
export class AppConfigService {

  configUrl = 'assets/config.json';
  
  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) { }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, { observe: 'response' });
  }

}
