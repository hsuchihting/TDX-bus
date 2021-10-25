import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import jsSHA from 'jssha';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  apiUrl: string = environment.tourApiUrl;
  constructor(private _http: HttpClient) {}

  getAllScenicSpot(): Observable<any> {
    return this._http.get(`${this.apiUrl}/ScenicSpot?$top=30&$format=JSON`, {
      headers: this.getAuthorizationHeader(),
    });
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
