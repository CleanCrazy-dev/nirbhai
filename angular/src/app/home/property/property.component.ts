import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from "@angular/router";

import { PropertyService } from '../../_services/property.service';
import { RESOURCE_URL } from '../../_services/endPoint';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  errMsg = "";
  resourceURL = RESOURCE_URL;

  // MatPaginator Inputs
  totalRecord = 0;
  pageSize = 12;
  pageSizeOptions: number[] = [5, 12, 24];

  // MatPaginator Output
  pageEvent: PageEvent;

  PageAction:string = "";
  city:string = "Calgary";
  tile_num: string = "1";

  public searchResultArr = [];

  constructor(private route: ActivatedRoute, private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.PageAction = this.route.snapshot.queryParamMap.get('PageAction');

    if(this.PageAction == "searchresult") {
      this.tile_num = this.route.snapshot.queryParamMap.get("tile_num");

      this.getPropertySearchResult(this.city, '', '', this.pageSize, 0);
    }    

    console.log("city = ", this.city);
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
    this.getPropertySearchResult(this.city, '', '', this.pageEvent.pageSize, this.pageEvent.pageIndex * this.pageEvent.pageSize);
  }
}
