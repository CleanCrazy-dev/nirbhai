import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-calgary-listing',
  templateUrl: './calgary-listing.component.html',
  styleUrls: ['./calgary-listing.component.css']
})
export class CalgaryListingComponent implements OnInit {

  errMsg: string;

  filterCondition: any = {};

  constructor() { 
    
  }

  ngOnInit(): void {

  }

  getPropertyList(filterCondition: Object) {
    this.filterCondition = filterCondition;
  }


}
