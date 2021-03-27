import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chestermere-listing',
  templateUrl: './chestermere-listing.component.html',
  styleUrls: ['./chestermere-listing.component.css']
})
export class ChestermereListingComponent implements OnInit {

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
