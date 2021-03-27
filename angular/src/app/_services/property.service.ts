import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ENDPOINT_URL } from './endPoint';

const API_URL = ENDPOINT_URL + 'api/property/';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  getOurListing(): Observable<any> {
    return this.http.get(API_URL + 'recentList', { responseType: 'json' });
  }

  getPropertySearchResult(city: string, subdivisionName: string, propertyType: string, limit: number, offset: number): Observable<any> {
    return this.http.post(API_URL + 'propertySearchResult', 
    {
      "city": city,
      "subdivisionName": subdivisionName,
      "propertyType": propertyType,
      "limit": limit,
      "offset": offset
    }, {responseType: 'json'});
  }

  getPropertyById(City: string, ListingKeyNumeric: string): Observable<any> {
    return this.http.post(API_URL + 'PropertyById', 
    {
      "City": City,
      "ListingKeyNumeric": ListingKeyNumeric
    }, {responseType: 'json'});
  }

  getPropertyCalgarySearchResult(filterCondition: object, limit: number, offset: number): Observable<any> {
    var city = filterCondition['city'];
    var district = filterCondition['district'];
    var subdivisionName = filterCondition['subdivisionName'];

    return this.http.post(API_URL + 'PropertyCalgarySearchResult', 
    {
      "city": city,
      "district": district,
      "subdivisionName": subdivisionName,
      "limit": limit,
      "offset": offset
    }, {responseType: 'json'});
  }
}
