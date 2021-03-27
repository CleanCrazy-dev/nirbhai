import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PageEvent } from '@angular/material/paginator';
import { BasicLookupService } from '../../_services/basiclookup.service';
import { PropertyService } from '../../_services/property.service';
import { RESOURCE_URL } from '../../_services/endPoint';

interface City {
  value: string;
  viewValue: string;
};

interface StateOrProvince {
  disabled?: boolean;
  name: string;
  cityList: City[];
};

interface SubdivisionName {
  value: string;
  viewValue: string;
};

interface PropertyType {
  value: string;
  viewValue: string;
};

@Component({
  selector: 'app-sellers-get-home',
  templateUrl: './sellers-get-home.component.html',
  styleUrls: ['./sellers-get-home.component.css']
})
export class SellersGetHomeComponent implements OnInit {

  errMsg: string;

  selectedCity: string = '';
  StateOrProvinceCityList: StateOrProvince[];

  selectedSubdivisionName: string = '';
  SubdivisionNameList: SubdivisionName[];

  priceMin: number;
  priceMax: number;

  selectedPropertyType: string = '';
  propertyTypeList: PropertyType[];

  resourceURL = RESOURCE_URL;

  // MatPaginator Inputs
  totalRecord = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [2, 5, 10, 25];

  // MatPaginator Output
  pageEvent: PageEvent;
  public searchResultArr = [];

  constructor(private route: ActivatedRoute, private basicLookupService: BasicLookupService, private propertyService: PropertyService) { }

  ngOnInit(): void {

    this.selectedCity = this.route.snapshot.queryParamMap.get('city');

    this.getCityListByStateGroup();
    this.getSubdivisionNameListByCity();
    this.getPropertyTypeList();

    this.getPropertySearchResult(this.selectedCity, this.selectedSubdivisionName, this.selectedPropertyType, this.pageSize, 0);
  }

  getCityListByStateGroup() {
    this.basicLookupService.getCityListByStateGroup().subscribe(
      data => {
        this.StateOrProvinceCityList = data;
      },
      err => {
        this.errMsg = JSON.parse(err.error).message;
      }
    );
  }

  onChangeCity(newValue) {
    this.selectedCity = newValue;
    this.getSubdivisionNameListByCity();
  }

  getSubdivisionNameListByCity() {
    this.basicLookupService.getSubdivisionNameListByCity(this.selectedCity).subscribe(
      data => {
        this.SubdivisionNameList = data;
      },
      err => {
        this.errMsg = JSON.parse(err.error).message;
      }
    );
  }

  getPropertyTypeList() {
    this.basicLookupService.getPropertyTypeList().subscribe(
      data => {
        this.propertyTypeList = data;
      },
      err => {
        this.errMsg = JSON.parse(err.error).message;
      }
    );
  }

  getPropertySearchResult(city: string, subdivisionName: string, propertyType: string, limit: number, offset: number) {
    this.propertyService.getPropertySearchResult(city, subdivisionName, propertyType, limit, offset).subscribe(
      data => {
        this.searchResultArr = data.data[0];
        this.totalRecord = data.totalRecord;
      },
      err => {
        this.errMsg = JSON.parse(err.error).message;
      }
    );
  }

  addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? (parseInt(x[1]) == 0 ? '' : '.' + x[1]) : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }

  onPaginateChange($event) {
    this.pageSize = this.pageEvent.pageSize;
    this.getPropertySearchResult(this.selectedCity, this.selectedSubdivisionName, this.selectedPropertyType, this.pageEvent.pageSize, this.pageEvent.pageIndex * this.pageEvent.pageSize);
  }

  getHomeValue() {
    this.getPropertySearchResult(this.selectedCity, this.selectedSubdivisionName, this.selectedPropertyType, this.pageSize, 0);
  }

}
