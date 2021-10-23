import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  apiUrl: string = environment.busApiUrl;
  constructor() {}
}
