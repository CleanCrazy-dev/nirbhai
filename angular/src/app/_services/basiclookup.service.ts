import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ENDPOINT_URL } from './endPoint';

const API_URL = ENDPOINT_URL + 'api/basicLookup/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BasicLookupService {

  constructor(private http: HttpClient) { }

  getStateOrProvinceList(): Observable<any> {
    return this.http.get(API_URL + 'StateOrProvince', { responseType: 'json' });
  }

  getCountyOrParishListByState(state: string): Observable<any> {
    return this.http.post(API_URL + 'CountyOrParishListByState', {
      "state": state
    }, httpOptions);
  }

  getDistrictAndSubdivisionNameByCity(city: string): Observable<any> {
    return this.http.post(API_URL + 'DistrictAndSubdivisionNameByCity', {
      "city": city
    }, httpOptions);
  }

  getStreetDirectionList(): Observable<any> {
    return this.http.get(API_URL + 'StreetDirection', { responseType: 'json' });
  }

  getCityListByStateGroup(): Observable<any> {
    return this.http.get(API_URL + 'CityListByStateGroup', { responseType: 'json' });
  }

  getCityListByStateAndCounty(state: string, county: string): Observable<any> {
    return this.http.post(API_URL + 'CityListByStateAndCounty', {
      "state": state,
      "county": county
    }, httpOptions);
  }

  getSubdivisionNameList(): Observable<any> {   //SubdivisionName
    return this.http.get(API_URL + 'SubdivisionName', { responseType: 'json' });
  }

  getSubdivisionNameListByCity(city: string): Observable<any> {
    return this.http.post(API_URL + 'SubdivisionNameByCity', {
      "city": city
    }, httpOptions);
  }

  getPropertyTypeList(): Observable<any> {
    return this.http.get(API_URL + 'PropertyType', { responseType: 'json' });
  }

  getCondoTypeList(): Observable<any> {
    return this.http.get(API_URL + 'CondoType', { responseType: 'json' });
  }

  getCommonWallsList(): Observable<any> {
    return this.http.get(API_URL + 'CommonWallsList', { responseType: 'json' });
  }

  getParkingFeatureList(): Observable<any> {
    return this.http.get(API_URL + 'ParkingFeatureList', { responseType: 'json' });
  }

}
