import { Component, OnInit, EventEmitter, Output, AfterViewInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { PropertyService } from '../../../../_services/property.service';
import { RESOURCE_URL, SERVER_URL } from '../../../../_services/endPoint';

@Component({
  selector: 'app-community-list-view',
  templateUrl: './community-list-view.component.html',
  styleUrls: ['./community-list-view.component.css']
})
export class CommunityListViewComponent implements OnInit {

  @Input() city: string = "";
  @Input() district: string = "";
  @Input() community: string = "";

  errMsg: string;

  filterCondition: any = {};

  resourceURL = RESOURCE_URL;
  serverURL = SERVER_URL;

  // MatPaginator Inputs
  totalRecord = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [2, 5, 10, 25];

  // MatPaginator Output
  pageEvent: PageEvent;
  public searchResultArr = [];

  selectedSort: string = "";

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.filterCondition = {
      "city": this.city,
      "district": this.district,
      "subdivisionName": this.community
    };

    this.getPropertyCalgarySearchResult(this.filterCondition, this.pageSize, 0);
  }

  getPropertyCalgarySearchResult(filterCondition: Object, limit: number, offset: number) {
    console.log("filterCondition = ", filterCondition);
    this.propertyService.getPropertyCalgarySearchResult(filterCondition, limit, offset).subscribe(
      data => {
        this.searchResultArr = data.result;
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
    this.getPropertyCalgarySearchResult(this.filterCondition, this.pageEvent.pageSize, this.pageEvent.pageIndex * this.pageEvent.pageSize);
  }

  gotoPropertyDetail(ListingKeyNumeric: string) {
    window.open(this.serverURL + "buyers/property-detail/" + this.city + "/" + ListingKeyNumeric);
  }

  onChangeSortBy(newVal) {
    
  }
}
