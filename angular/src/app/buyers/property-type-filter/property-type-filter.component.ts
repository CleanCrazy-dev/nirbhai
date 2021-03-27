import { Component, OnInit, HostListener, EventEmitter, Output, Input } from '@angular/core';
import { BasicLookupService } from '../../_services/basiclookup.service';
import { SERVER_URL } from '../../_services/endPoint';

declare var $: any;


interface StateOrProvince {
  value: string;
  viewValue: string;
};

interface CountyOrParish {
  value: string;
  viewValue: string;
};

interface City {
  value: string;
  viewValue: string;
};

interface District {
  value: string;
  viewValue: string;
};

interface SubdivisionName {
  value: string;
  viewValue: string;
};

interface PropertyType {
  value: string;
  viewValue: string;
};

interface CondoType {
  value: string;
  viewValue: string;
}

interface CommonWalls {
  value: string;
  viewValue: string;
}

interface ParkingFeature {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-property-type-filter',
  templateUrl: './property-type-filter.component.html',
  styleUrls: ['./property-type-filter.component.css']
})
export class PropertyTypeFilterComponent implements OnInit {

  @Input() city: string = "";
  @Output() setFiter: EventEmitter<any> = new EventEmitter();

  errMsg: string;

  serverURL = SERVER_URL;

  selectedStateOrProvince: string = '';
  StateOrProvinceList: StateOrProvince[];

  selectedCountyOrParish: string = '';
  CountyOrParishList: CountyOrParish[];

  CityList: City[];

  selectedDistrict: string;
  DistrictList: District[] = [
    {value: 'CAL Zone NE', viewValue: 'Calgary-NE'},
    {value: 'CAL Zone NW', viewValue: 'Calgary-NW'},
    {value: 'CAL Zone SE', viewValue: 'Calgary-SE'},
    {value: 'CAL Zone SW', viewValue: 'Calgary-SW'},
    {value: 'CAL Zone N', viewValue: 'Calgary-N'},
    {value: 'CAL Zone E', viewValue: 'Calgary-E'},
    {value: 'CAL Zone W', viewValue: 'Calgary-W'},
    {value: 'CAL Zone S', viewValue: 'Calgary-S'},
    {value: 'CAL Zone CC', viewValue: 'Calgary-Center'}
  ];

  selectedSubdivisionName: string = "";
  SubdivisionNameList: SubdivisionName[];

  selectedCondoType: string;
  CondoTypeList: CondoType[];

  priceMin: string;
  priceMax: string;

  selectedBedRooms: string = "Any";

  selectedBathrooms: string = "Any";

  yearbuildMin: string;
  yearbuildMax: string;

  squarefeetMin: string;
  squarefeetMax: string;

  lotsizeMin: string;
  lotsizeMax: string;

  selectedCommonWalls: string;
  CommonWallsList: CommonWalls[];

  selectedPropertyType: string;
  propertyTypeList: PropertyType[];

  selectedParkingFeature: string;
  ParkingFeatureList: ParkingFeature[];

  windowScrolled: boolean;
  selectedMoreFilterBtn: boolean = false;

  constructor(private basicLookupService: BasicLookupService) { }

  ngOnInit(): void {

    this.getSubdivisionNameListByCity();

    this.getCondoTypeList();

    // this.getPropertyTypeList();

    this.getCommonWallsList();

    this.getParkingFeatureList();

    this.applyFilter();
  }

  @HostListener("window:scroll", [])
  onScroll() {
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    
    if (scrollPos > document.getElementById('container_div').offsetTop + 15) {
      this.windowScrolled = true;
      $(".container-content-filter").addClass("fixed");
    } 
    else if (this.windowScrolled && scrollPos < document.getElementById('container_div').offsetTop + 15) {
      this.windowScrolled = false;
      $(".container-content-filter").removeClass("fixed");
    }
  }

  getSubdivisionNameListByCity() {
    this.basicLookupService.getSubdivisionNameListByCity(this.city).subscribe(
      data => {
        this.SubdivisionNameList = data;
      },
      err => {
        this.errMsg = JSON.parse(err.error).message;
      }
    );
  }

  getCondoTypeList() {
    this.basicLookupService.getCondoTypeList().subscribe(
      data => {
        this.CondoTypeList = data;
      },
      err => {
        this.errMsg = JSON.parse(err.error).message;
      }
    );
  }

  getCommonWallsList() {
    this.basicLookupService.getCommonWallsList().subscribe(
      data => {
        this.CommonWallsList = data;
      },
      err => {
        this.errMsg = JSON.parse(err.error).message;
      }
    );
  }

  getParkingFeatureList() {
    this.basicLookupService.getParkingFeatureList().subscribe(
      data => {
        this.ParkingFeatureList = data;
      },
      err => {
        this.errMsg = JSON.parse(err.error).message;
      }
    );
  }

  onChangeBedRooms(newVal) {

  }

  onChangeBathrooms(newVal) {

  }

  onChangeSubdivisionName(newValue) {
    this.applyFilter();

    var community = newValue.replaceAll(" ", "");
    community = community.replaceAll("/", "");
    console.log("sel community - ", community);
    if(community == "") 
      window.open(this.serverURL + "area/" + this.city);
    else
      window.open(this.serverURL + "area/" + community);
  }

  onChangeCondoType(newValue) {

  }

  onChangeCommonWalls(newValue) {

  }

  onChangeParkingFeature(newValue) {

  }

  applyFilter() {
    this.selectedDistrict = "";
    this.DistrictList.forEach(element => {
      if(element.value == this.selectedSubdivisionName) {
        this.selectedDistrict = element.value;
      }
    });
    
    var filterCondition = {
      "city": this.city,
      "district": this.selectedDistrict,
      "subdivisionName": (this.selectedDistrict == "" ? this.selectedSubdivisionName : "" )
    };
    this.setFiter.emit(filterCondition);
  }

  moreFilterClick() {
    this.selectedMoreFilterBtn = !this.selectedMoreFilterBtn;
  }

}
