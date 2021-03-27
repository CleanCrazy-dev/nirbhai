import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airdrie-listing',
  templateUrl: './airdrie-listing.component.html',
  styleUrls: ['./airdrie-listing.component.css']
})
export class AirdrieListingComponent implements OnInit {

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
