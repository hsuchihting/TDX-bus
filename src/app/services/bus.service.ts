import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsSHA from 'jssha';
import { Observable } from 'rxjs';
import { City } from 'app/model/city.model';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  apiUrl: string = environment.busApiUrl;
  constructor(private _http: HttpClient) {}

  //*取得縣市 */
  getCity() {
    return this._http.get(
      `${this.apiUrl}/DataVersion/City/NewTaipei?$format=JSON`,
      {
        headers: this.getAuthorizationHeader(),
      }
    );
  }

  //*取得指定公車路線
  getCustomCityBus(city: number): Observable<any> {
    return this._http.get(
      `${this.apiUrl}/Route/City/${city}?$top=30&$format=JSON`,
      {
        headers: this.getAuthorizationHeader(),
      }
    );
  }

  getAuthorizationHeader() {
    const appID: string = 'affd1f107efa40e8ad46391abd22cba8';
    const appKey: string = '-dwtKHhGUCGRAeNGx3FH9XD8RhY';
    const ISOString: string = new Date().toString();
    var ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(appKey, 'TEXT');
    ShaObj.update('x-date: ' + ISOString);
    var HMAC = ShaObj.getHMAC('B64');
    var Authorization =
      'hmac username="' +
      appID +
      '", algorithm="hmac-sha1", headers="x-date", signature="' +
      HMAC +
      '"';

    return {
      Authorization: Authorization,
      'X-Date': ISOString /*,'Accept-Encoding': 'gzip'*/,
    };
  }
}
