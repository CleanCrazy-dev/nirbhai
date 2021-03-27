import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ENDPOINT_URL } from './endPoint';

const API_URL = ENDPOINT_URL + 'api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getBuyerBoard(): Observable<any> {
    return this.http.get(API_URL + 'buyer', { responseType: 'text' });
  }

  getSellerBoard(): Observable<any> {
    return this.http.get(API_URL + 'seller', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

}
