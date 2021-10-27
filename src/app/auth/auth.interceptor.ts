import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import jsSHA from 'jssha';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const appID: string = 'affd1f107efa40e8ad46391abd22cba8';
    const appKey: string = '-dwtKHhGUCGRAeNGx3FH9XD8RhY';
    const utcString = new Date().toUTCString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(appKey, 'TEXT');
    ShaObj.update('x-date: ' + utcString);

    const HMAC = ShaObj.getHMAC('B64');
    const contentType = request.headers.get('Content-Type');
    const setHeaders = {
      Authorization: `hmac username="${appID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`,
      'X-Date': utcString,
      'Content-Type': contentType || 'application/json',
    };

    //*把原始的 request clone 起來 */
    const req = request.clone({
      setHeaders: {
        ...setHeaders,
      },
    });
    return next.handle(req);
  }
}
